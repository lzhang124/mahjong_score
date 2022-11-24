const {
  useEffect,
  useState
} = React;
const {
  Button,
  Grid,
  Input,
  Table
} = semanticUIReact;
const DATA_NAME = 'MahJongData';
const DEFAULT_DATA = {
  'names': ['Larry', 'Kimberly', 'Stephanie', 'Dad'],
  'scores': [[-12, -3, 18, -3], [-3, -6, -6, 15]],
  'winds': ['東', '東'],
  'dealers': ['Larry', 'Kimberly'],
  'winners': ['Stephanie', 'Dad'],
  'feeders': ['Larry', 'Stephanie']
};
const WINDS = ['東', '南', '西', '北'];
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
const GlobalButtons = ({
  refresh
}) => {
  return /*#__PURE__*/React.createElement("div", {
    className: "global-buttons"
  }, /*#__PURE__*/React.createElement(Button, {
    basic: true,
    inverted: true,
    circular: true,
    icon: 'refresh',
    onClick: () => refresh()
  }));
};
const NameInput = ({
  names,
  setNames
}) => {
  const [name1, setName1] = useState('');
  const [name2, setName2] = useState('');
  const [name3, setName3] = useState('');
  const [name4, setName4] = useState('');
  return /*#__PURE__*/React.createElement(Grid, {
    centered: true,
    verticalAlign: "middle",
    style: {
      height: '100vh'
    }
  }, /*#__PURE__*/React.createElement(Grid.Column, {
    width: 4,
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
    color: "red",
    disabled: !name1 || !name2 || !name3 || !name4,
    style: {
      marginTop: '1rem'
    },
    onClick: () => setNames([name1, name2, name3, name4])
  }, "Start")));
};
const DataTable = ({
  data,
  setData
}) => {
  const {
    names,
    scores,
    winds,
    dealers
  } = data;
  return /*#__PURE__*/React.createElement(Grid, {
    centered: true,
    verticalAlign: "middle",
    style: {
      height: '100vh'
    }
  }, /*#__PURE__*/React.createElement(Grid.Column, {
    width: 8,
    textAlign: "center"
  }, /*#__PURE__*/React.createElement(Table, {
    basic: true,
    inverted: true,
    selectable: true,
    fixed: true,
    textAlign: "center"
  }, /*#__PURE__*/React.createElement(Table.Header, null, /*#__PURE__*/React.createElement(Table.Row, null, /*#__PURE__*/React.createElement(Table.HeaderCell, {
    collapsing: true
  }), names.map((n, i) => /*#__PURE__*/React.createElement(Table.HeaderCell, {
    id: i
  }, n)))), /*#__PURE__*/React.createElement(Table.Body, null, scores.map((game, i) => /*#__PURE__*/React.createElement(Table.Row, {
    id: i
  }, /*#__PURE__*/React.createElement(Table.Cell, {
    collapsing: true
  }, winds[i]), game.map((s, j) => /*#__PURE__*/React.createElement(Table.Cell, {
    id: j
  }, s))))), /*#__PURE__*/React.createElement(Table.Footer, null, /*#__PURE__*/React.createElement(Table.Row, null, /*#__PURE__*/React.createElement(Table.HeaderCell, {
    collapsing: true
  }), names.map((_, i) => /*#__PURE__*/React.createElement(Table.HeaderCell, {
    id: i
  }, scores.reduce((accum, game) => accum + game[i], 0))))))));
};
const App = () => {
  const [data, _setData] = useState(decode(getData(DATA_NAME)));
  const names = data['names'] || [];
  const setData = data => {
    _setData(data);
    storeData(DATA_NAME, encode(data));
  };
  const refresh = () => {
    setData(DEFAULT_DATA);
  };
  const setNames = names => {
    setData({
      ...data,
      ...{
        names
      }
    });
  };
  return (data['names'] || []).length === 4 ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(GlobalButtons, {
    refresh
  }), /*#__PURE__*/React.createElement(DataTable, {
    data,
    setData
  })) : /*#__PURE__*/React.createElement(NameInput, {
    names,
    setNames
  });
};
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render( /*#__PURE__*/React.createElement(App, null));
