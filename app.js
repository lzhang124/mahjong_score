const {
  useEffect,
  useRef,
  useState
} = React;
const {
  Button,
  Grid,
  Input,
  Transition
} = semanticUIReact;
const DATA_NAME = 'MahJongData';
const DEFAULT_DATA = {
  names: [],
  scores: [],
  winds: [],
  dealers: [],
  winners: [],
  feeders: [],
  wind: null,
  dealer: null
};
const WINDS = ['東', '南', '西', '北'];
const PENALTY_POINTS = -6;
const MIN_POINTS = 3;
const MAX_POINTS = 10;
const encode = obj => {
  return JSON.stringify(obj);
};
const decode = str => {
  return str ? JSON.parse(str) : DEFAULT_DATA;
};
const storeData = (name, data) => {
  localStorage.setItem(name, data);
};
const getData = name => {
  return localStorage.getItem(name);
};
const sum = arr => {
  return arr.reduce((accum, a) => accum + a, 0);
};
const GlobalButtons = ({
  data,
  setData
}) => {
  const {
    names,
    scores,
    winds,
    dealers,
    winners,
    feeders,
    wind,
    dealer
  } = data;
  const [menuOpen, setMenuOpen] = useState(false);
  const [copyOpen, setCopyOpen] = useState(false);
  const [uploadOpen, setUploadOpen] = useState(false);
  const [error, setError] = useState(false);
  const uploadRef = useRef(null);
  const testData = str => {
    try {
      let testData = decode(str);
      setError(!Object.keys(DEFAULT_DATA).every(k => k in testData));
      return true;
    } catch (_) {
      setError(true);
      return false;
    }
  };
  const loadData = str => {
    setData(decode(str));
    setError(false);
    setUploadOpen(false);
  };
  useEffect(() => {
    if (uploadOpen) {
      setError(false);
      uploadRef.current.inputRef.current.value = '';
      uploadRef.current.focus();
    }
  }, [uploadOpen]);
  return /*#__PURE__*/React.createElement("div", {
    className: "global-buttons"
  }, /*#__PURE__*/React.createElement("div", {
    className: "button"
  }, /*#__PURE__*/React.createElement(Button, {
    basic: true,
    inverted: true,
    circular: true,
    icon: menuOpen ? 'close' : 'bars',
    onClick: () => {
      if (menuOpen) {
        setMenuOpen(false);
        setCopyOpen(false);
        setUploadOpen(false);
      } else {
        setMenuOpen(true);
      }
    }
  })), (names || []).length === 4 && /*#__PURE__*/React.createElement(React.Fragment, null, scores.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "button"
  }, /*#__PURE__*/React.createElement(Transition, {
    visible: menuOpen,
    animation: "fade down",
    duration: 300
  }, /*#__PURE__*/React.createElement(Button, {
    basic: true,
    inverted: true,
    circular: true,
    icon: 'undo',
    onClick: () => {
      setData({
        ...data,
        ...{
          scores: scores.slice(0, -1),
          winds: winds.slice(0, -1),
          dealers: dealers.slice(0, -1),
          winners: winners.slice(0, -1),
          feeders: feeders.slice(0, -1),
          wind: winds.at(-1),
          dealer: dealers.at(-1)
        }
      });
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "button"
  }, /*#__PURE__*/React.createElement(Transition, {
    visible: menuOpen,
    animation: "fade down",
    duration: 300
  }, /*#__PURE__*/React.createElement(Button, {
    basic: true,
    inverted: true,
    circular: true,
    icon: 'refresh',
    onClick: () => setData(DEFAULT_DATA)
  })))), /*#__PURE__*/React.createElement("div", {
    className: "button"
  }, /*#__PURE__*/React.createElement(Transition, {
    visible: menuOpen,
    animation: "fade down",
    duration: 300
  }, /*#__PURE__*/React.createElement(Button, {
    basic: true,
    inverted: true,
    circular: true,
    icon: "copy",
    onClick: () => {
      setUploadOpen(false);
      setCopyOpen(true);
      setTimeout(() => setCopyOpen(false), 3000);
      navigator.clipboard.writeText(getData(DATA_NAME));
    }
  })), /*#__PURE__*/React.createElement(Transition, {
    visible: copyOpen,
    animation: "fade right",
    duration: 300
  }, /*#__PURE__*/React.createElement("div", {
    className: "popup"
  }, "Config copied to clipboard!"))), /*#__PURE__*/React.createElement("div", {
    className: "button"
  }, /*#__PURE__*/React.createElement(Transition, {
    visible: menuOpen,
    animation: "fade down",
    duration: 300
  }, /*#__PURE__*/React.createElement(Button, {
    className: uploadOpen ? 'active' : '',
    basic: true,
    inverted: true,
    circular: true,
    icon: "upload",
    onClick: () => {
      setUploadOpen(!uploadOpen);
    }
  })), /*#__PURE__*/React.createElement(Transition, {
    visible: uploadOpen,
    animation: "fade right",
    duration: 300
  }, /*#__PURE__*/React.createElement("div", {
    className: `popup ${error ? 'error' : ''}`
  }, /*#__PURE__*/React.createElement(Input, {
    ref: uploadRef,
    transparent: true,
    inverted: true,
    placeholder: "Config",
    onChange: e => {
      testData(e.target.value);
    },
    onKeyDown: e => {
      e.key === 'Enter' && e.target.value !== '' && testData(e.target.value) && loadData(e.target.value);
      e.key === 'Escape' && setUploadOpen(false);
    }
  })))));
};
const NameInput = ({
  data,
  setData
}) => {
  const {
    names
  } = data;
  const [name1, setName1] = useState('');
  const [name2, setName2] = useState('');
  const [name3, setName3] = useState('');
  const [name4, setName4] = useState('');
  return /*#__PURE__*/React.createElement(Grid, {
    className: "nameInput",
    centered: true,
    verticalAlign: "middle",
    style: {
      height: '100vh'
    }
  }, /*#__PURE__*/React.createElement(Grid.Column, {
    mobile: 15,
    tablet: 15,
    computer: 4,
    textAlign: "center"
  }, /*#__PURE__*/React.createElement(Input, {
    autoFocus: true,
    fluid: true,
    inverted: true,
    transparent: true,
    placeholder: "Player 1",
    value: name1,
    onChange: e => setName1(e.target.value)
  }), /*#__PURE__*/React.createElement(Input, {
    fluid: true,
    inverted: true,
    transparent: true,
    placeholder: "Player 2",
    value: name2,
    onChange: e => setName2(e.target.value)
  }), /*#__PURE__*/React.createElement(Input, {
    fluid: true,
    inverted: true,
    transparent: true,
    placeholder: "Player 3",
    value: name3,
    onChange: e => setName3(e.target.value)
  }), /*#__PURE__*/React.createElement(Input, {
    fluid: true,
    inverted: true,
    transparent: true,
    placeholder: "Player 4",
    value: name4,
    onChange: e => setName4(e.target.value)
  }), /*#__PURE__*/React.createElement(Button, {
    inverted: true,
    disabled: !name1 || !name2 || !name3 || !name4,
    style: {
      marginTop: '1rem'
    },
    onClick: () => {
      setData({
        ...data,
        ...{
          names: [name1, name2, name3, name4],
          wind: 0,
          dealer: 0
        }
      });
    }
  }, "Start")));
};
const DataTable = ({
  data,
  setData,
  scrollRef
}) => {
  const {
    names,
    scores,
    winds,
    dealers,
    winners,
    feeders,
    wind,
    dealer
  } = data;
  return /*#__PURE__*/React.createElement(Grid, {
    className: "dataTable",
    inverted: true,
    columns: "equal",
    textAlign: "center",
    verticalAlign: "middle"
  }, /*#__PURE__*/React.createElement(Grid.Row, {
    className: "header"
  }, /*#__PURE__*/React.createElement(Grid.Column, {
    width: 1
  }, WINDS[wind]), names.map((n, i) => /*#__PURE__*/React.createElement(Grid.Column, {
    id: i
  }, /*#__PURE__*/React.createElement("div", {
    className: 'point' + (dealer === i ? ' underlined' : '')
  }, n)))), scores.map((game, i) => /*#__PURE__*/React.createElement(Grid.Row, {
    id: i
  }, /*#__PURE__*/React.createElement(Grid.Column, {
    width: 1
  }, WINDS[winds[i]]), game.map((s, j) => /*#__PURE__*/React.createElement(Grid.Column, {
    id: j
  }, /*#__PURE__*/React.createElement("div", {
    className: 'point' + (s < 0 && winners[i] === j ? ' red' : winners[i] === j ? ' green' : s < 0 && feeders[i] === j ? ' red' : '') + (dealers[i] === j ? ' underlined' : '')
  }, s))))), /*#__PURE__*/React.createElement("div", {
    ref: scrollRef
  }), /*#__PURE__*/React.createElement(Grid.Row, {
    className: "footer"
  }, /*#__PURE__*/React.createElement(Grid.Column, {
    width: 1
  }), names.map((_, i) => /*#__PURE__*/React.createElement(Grid.Column, {
    id: i
  }, sum(scores.map(game => game[i]))))));
};
const GameButtons = ({
  data,
  setData,
  scrollRef
}) => {
  const {
    names,
    scores,
    winds,
    dealers,
    winners,
    feeders,
    wind,
    dealer
  } = data;
  const [winner, setWinner] = useState(null);
  const [feeder, setFeeder] = useState(null);
  const [points, setPoints] = useState(null);
  const nextWind = () => {
    return points < 0 || winner === dealer || (dealer + 1) % 4 !== 0 ? wind : (wind + 1) % 4;
  };
  const nextDealer = () => {
    return points < 0 || winner === dealer ? dealer : (dealer + 1) % 4;
  };
  const nextGame = () => {
    var game = Array(4).fill(-points);
    game[winner] = 0;
    if (points > 0) {
      winner === feeder ? game = game.map(s => s * 2) : game[feeder] = game[feeder] * 2;
      winner === dealer ? game = game.map(s => s * 2) : game[dealer] = game[dealer] * 2;
    }
    game[winner] = -sum(game);
    setData({
      ...data,
      ...{
        scores: [...scores, game],
        winds: [...winds, wind],
        dealers: [...dealers, dealer],
        winners: [...winners, winner],
        feeders: [...feeders, feeder],
        wind: nextWind(),
        dealer: nextDealer()
      }
    });
    setWinner(null);
    setFeeder(null);
    setPoints(null);
  };
  return /*#__PURE__*/React.createElement(Grid, {
    className: "gameButtons",
    inverted: true,
    columns: "equal",
    textAlign: "center",
    verticalAlign: "middle"
  }, /*#__PURE__*/React.createElement(Grid.Row, null, names.map((n, i) => /*#__PURE__*/React.createElement(Grid.Column, {
    id: i
  }, /*#__PURE__*/React.createElement(Button, {
    inverted: true,
    fluid: true,
    color: "green",
    active: winner === i,
    onClick: () => {
      setWinner(i);
      setFeeder(null);
    }
  }, n)))), /*#__PURE__*/React.createElement(Grid.Row, null, names.map((n, i) => /*#__PURE__*/React.createElement(Grid.Column, {
    id: i
  }, /*#__PURE__*/React.createElement(Button, {
    inverted: true,
    fluid: true,
    disabled: winner === null,
    color: winner === null ? '' : winner === i ? 'green' : 'red',
    active: feeder === i,
    onClick: () => {
      setFeeder(i);
    }
  }, winner === i ? 'Self Draw' : n)))), /*#__PURE__*/React.createElement(Grid.Row, null, [PENALTY_POINTS].concat([...Array(MAX_POINTS + 1).keys()].slice(MIN_POINTS)).map((p, i) => /*#__PURE__*/React.createElement(Grid.Column, {
    id: i,
    textAlign: "center"
  }, /*#__PURE__*/React.createElement(Button, {
    inverted: true,
    circular: true,
    color: p > 0 ? 'white' : 'red',
    active: points === p,
    onClick: () => {
      setPoints(p);
    }
  }, p)))), /*#__PURE__*/React.createElement(Grid.Row, null, /*#__PURE__*/React.createElement(Grid.Column, null, /*#__PURE__*/React.createElement(Button, {
    inverted: true,
    fluid: true,
    disabled: winner === null || feeder === null || !points,
    onClick: () => {
      nextGame();
    }
  }, "Next Game"))));
};
const App = () => {
  const [data, _setData] = useState(decode(getData(DATA_NAME)));
  const scrollRef = useRef(null);
  const {
    names
  } = data;
  const setData = data => {
    _setData(data);
    storeData(DATA_NAME, encode(data));
  };
  useEffect(() => {
    scrollRef.current && scrollRef.current.scrollIntoView({
      behavior: 'smooth'
    });
  }, [data]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(GlobalButtons, {
    data,
    setData
  }), (names || []).length === 4 ? /*#__PURE__*/React.createElement(Grid, {
    centered: true,
    verticalAlign: "middle"
  }, /*#__PURE__*/React.createElement(Grid.Row, {
    style: {
      height: 'calc(100vh - 16rem)'
    }
  }, /*#__PURE__*/React.createElement(Grid.Column, {
    mobile: 15,
    tablet: 15,
    computer: 8,
    textAlign: "center"
  }, /*#__PURE__*/React.createElement(DataTable, {
    data,
    setData,
    scrollRef
  }))), /*#__PURE__*/React.createElement(Grid.Row, {
    style: {
      height: '16rem'
    }
  }, /*#__PURE__*/React.createElement(Grid.Column, {
    mobile: 15,
    tablet: 15,
    computer: 8,
    textAlign: "center"
  }, /*#__PURE__*/React.createElement(GameButtons, {
    data,
    setData,
    scrollRef
  })))) : /*#__PURE__*/React.createElement(NameInput, {
    data,
    setData
  }));
};
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render( /*#__PURE__*/React.createElement(App, null));
