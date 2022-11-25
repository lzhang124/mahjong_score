const { useEffect, useRef, useState } = React
const { Button, Grid, Input, Transition } = semanticUIReact

const DATA_NAME = 'MahJongData'
const DEFAULT_DATA = {
  names: [],
  scores: [],
  winds: [],
  dealers: [],
  winners: [],
  feeders: [],
  wind: null,
  dealer: null,
}
const WINDS = ['東', '南', '西', '北']
const PENALTY_POINTS = -10
const MIN_POINTS = 5
const POINT_OPTIONS = [5, 6, 8, 12, 16, 24, 32, 48, 64, 88]

const encode = (obj) => {
  return JSON.stringify(obj)
}

const decode = (str) => {
  return str ? JSON.parse(str) : DEFAULT_DATA
}

const storeData = (name, data) => {
  localStorage.setItem(name, data)
}

const getData = (name) => {
  return localStorage.getItem(name)
}

const sum = (arr) => {
  return arr.reduce((accum, a) => accum + a, 0)
}

const GlobalButtons = ({ data, setData }) => {
  const { names, scores, winds, dealers, winners, feeders, wind, dealer } = data
  const [menuOpen, setMenuOpen] = useState(false)
  const [copyOpen, setCopyOpen] = useState(false)
  const [uploadOpen, setUploadOpen] = useState(false)
  const [error, setError] = useState(false)
  const uploadRef = useRef(null)

  const testData = (str) => {
    try {
      let testData = decode(str)
      setError(!Object.keys(DEFAULT_DATA).every((k) => k in testData))
      return true
    } catch (_) {
      setError(true)
      return false
    }
  }

  const loadData = (str) => {
    setData(decode(str))
    setError(false)
    setUploadOpen(false)
  }

  useEffect(() => {
    if (uploadOpen) {
      setError(false)
      uploadRef.current.inputRef.current.value = ''
      uploadRef.current.focus()
    }
  }, [uploadOpen])

  return (
    <div className='global-buttons'>
      <div className='button'>
        <Button
          basic
          inverted
          circular
          icon={menuOpen ? 'close' : 'bars'}
          onClick={() => {
            if (menuOpen) {
              setMenuOpen(false)
              setCopyOpen(false)
              setUploadOpen(false)
            } else {
              setMenuOpen(true)
            }
          }}
        />
      </div>
      {(names || []).length === 4 && (
        <>
          {scores.length > 0 && (
            <div className='button'>
              <Transition visible={menuOpen} animation='fade down' duration={300}>
                <Button
                  basic
                  inverted
                  circular
                  icon={'undo'}
                  onClick={() => {
                    setData({
                      ...data,
                      ...{
                        scores: scores.slice(0, -1),
                        winds: winds.slice(0, -1),
                        dealers: dealers.slice(0, -1),
                        winners: winners.slice(0, -1),
                        feeders: feeders.slice(0, -1),
                        wind: winds.at(-1),
                        dealer: dealers.at(-1),
                      },
                    })
                  }}
                />
              </Transition>
            </div>
          )}
          <div className='button'>
            <Transition visible={menuOpen} animation='fade down' duration={300}>
              <Button basic inverted circular icon={'refresh'} onClick={() => setData(DEFAULT_DATA)} />
            </Transition>
          </div>
        </>
      )}
      <div className='button'>
        <Transition visible={copyOpen} animation='fade left' duration={300}>
          <div className='popup'>Config copied to clipboard!</div>
        </Transition>
        <Transition visible={menuOpen} animation='fade down' duration={300}>
          <Button
            basic
            inverted
            circular
            icon='copy'
            onClick={() => {
              setUploadOpen(false)
              setCopyOpen(true)
              setTimeout(() => setCopyOpen(false), 3000)
              navigator.clipboard.writeText(getData(DATA_NAME))
            }}
          />
        </Transition>
      </div>
      <div className='button'>
        <Transition visible={uploadOpen} animation='fade left' duration={300}>
          <div className={`popup ${error ? 'error' : ''}`}>
            <Input
              ref={uploadRef}
              transparent
              inverted
              placeholder='Config'
              onChange={(e) => {
                testData(e.target.value)
              }}
              onKeyDown={(e) => {
                e.key === 'Enter' && e.target.value !== '' && testData(e.target.value) && loadData(e.target.value)
                e.key === 'Escape' && setUploadOpen(false)
              }}
            />
          </div>
        </Transition>
        <Transition visible={menuOpen} animation='fade down' duration={300}>
          <Button
            className={uploadOpen ? 'active' : ''}
            basic
            inverted
            circular
            icon='upload'
            onClick={() => {
              setUploadOpen(!uploadOpen)
            }}
          />
        </Transition>
      </div>
    </div>
  )
}

const NameInput = ({ data, setData }) => {
  const { names } = data
  const [name1, setName1] = useState('')
  const [name2, setName2] = useState('')
  const [name3, setName3] = useState('')
  const [name4, setName4] = useState('')

  return (
    <Grid
      className='nameInput'
      centered
      verticalAlign='middle'
      style={{
        height: '100vh',
      }}
    >
      <Grid.Column mobile={15} tablet={15} computer={4} textAlign='center'>
        <Input
          autoFocus
          fluid
          inverted
          transparent
          placeholder='Player 1'
          value={name1}
          onChange={(e) => setName1(e.target.value)}
        />
        <Input
          fluid
          inverted
          transparent
          placeholder='Player 2'
          value={name2}
          onChange={(e) => setName2(e.target.value)}
        />
        <Input
          fluid
          inverted
          transparent
          placeholder='Player 3'
          value={name3}
          onChange={(e) => setName3(e.target.value)}
        />
        <Input
          fluid
          inverted
          transparent
          placeholder='Player 4'
          value={name4}
          onChange={(e) => setName4(e.target.value)}
        />
        <Button
          inverted
          disabled={!name1 || !name2 || !name3 || !name4}
          style={{
            marginTop: '1rem',
          }}
          onClick={() => {
            setData({
              ...data,
              ...{
                names: [name1, name2, name3, name4],
                wind: 0,
                dealer: 0,
              },
            })
          }}
        >
          Start
        </Button>
      </Grid.Column>
    </Grid>
  )
}

const DataTable = ({ data, setData, scrollRef }) => {
  const { names, scores, winds, dealers, winners, feeders, wind, dealer } = data

  return (
    <Grid className='dataTable' inverted columns='equal' textAlign='center' verticalAlign='middle'>
      <Grid.Row className='header'>
        <Grid.Column width={1}>{WINDS[wind]}</Grid.Column>
        {names.map((n, i) => (
          <Grid.Column id={i}>
            <div className={'point' + (dealer === i ? ' underlined' : '')}>{n}</div>
          </Grid.Column>
        ))}
      </Grid.Row>
      {scores.map((game, i) => (
        <Grid.Row id={i}>
          <Grid.Column width={1}>{WINDS[winds[i]]}</Grid.Column>
          {game.map((s, j) => (
            <Grid.Column id={j}>
              <div
                className={
                  'point' +
                  (s < 0 && winners[i] === j
                    ? ' red'
                    : winners[i] === j
                    ? ' green'
                    : s < 0 && feeders[i] === j
                    ? ' red'
                    : '') +
                  (dealers[i] === j ? ' underlined' : '')
                }
              >
                {s}
              </div>
            </Grid.Column>
          ))}
        </Grid.Row>
      ))}
      <div ref={scrollRef} />
      <Grid.Row className='footer'>
        <Grid.Column width={1} />
        {names.map((_, i) => (
          <Grid.Column id={i}>{sum(scores.map((game) => game[i]))}</Grid.Column>
        ))}
      </Grid.Row>
    </Grid>
  )
}

const GameButtons = ({ data, setData, scrollRef }) => {
  const { names, scores, winds, dealers, winners, feeders, wind, dealer } = data
  const [winner, setWinner] = useState(null)
  const [feeder, setFeeder] = useState(null)
  const [points, setPoints] = useState(5)

  const nextWind = () => {
    return points < 0 || winner === dealer || (dealer + 1) % 4 !== 0 ? wind : (wind + 1) % 4
  }

  const nextDealer = () => {
    return points < 0 || winner === dealer ? dealer : (dealer + 1) % 4
  }

  const nextGame = () => {
    var game = Array(4).fill(-points)
    game[winner] = 0

    if (points > 0) {
      winner === feeder ? (game = game.map((s) => s * 2)) : (game[feeder] = game[feeder] * 2)
      winner === dealer ? (game = game.map((s) => s * 2)) : (game[dealer] = game[dealer] * 2)
    }
    game[winner] = -sum(game)

    setData({
      ...data,
      ...{
        scores: [...scores, game],
        winds: [...winds, wind],
        dealers: [...dealers, dealer],
        winners: [...winners, winner],
        feeders: [...feeders, feeder],
        wind: nextWind(),
        dealer: nextDealer(),
      },
    })
    setWinner(null)
    setFeeder(null)
    setPoints(5)
  }

  return (
    <Grid className='gameButtons' inverted columns='equal' textAlign='center' verticalAlign='middle'>
      <Grid.Row>
        {names.map((n, i) => (
          <Grid.Column id={i}>
            <Button
              inverted
              fluid
              color='green'
              active={winner === i}
              onClick={() => {
                setWinner(i)
                setFeeder(null)
              }}
            >
              {n}
            </Button>
          </Grid.Column>
        ))}
      </Grid.Row>
      <Grid.Row>
        {names.map((n, i) => (
          <Grid.Column id={i}>
            <Button
              inverted
              fluid
              disabled={winner === null}
              color={winner === null ? '' : winner === i ? 'green' : 'red'}
              active={feeder === i}
              onClick={() => {
                setFeeder(i)
              }}
            >
              {winner === i ? 'Self Draw' : n}
            </Button>
          </Grid.Column>
        ))}
      </Grid.Row>
      <Grid.Row>
        {[PENALTY_POINTS].concat(POINT_OPTIONS).map((p, i) => (
          <Grid.Column textAlign='center'>
            <Button
              inverted
              circular
              color={p < 0 ? 'red' : 'white'}
              onClick={() => {
                setPoints(p)
              }}
            >
              {p}
            </Button>
          </Grid.Column>
        ))}
        <Grid.Column textAlign='center'>
          <div className='pointsInput'>
            {points}
          </div>
        </Grid.Column>
        <Grid.Column textAlign='center'>
          <Button
            inverted
            circular
            color='white'
            icon='chevron down'
            disabled={points <= PENALTY_POINTS}
            onClick={() => {
              setPoints(points === MIN_POINTS ? PENALTY_POINTS : points - 1)
            }}
          />
        </Grid.Column>
        <Grid.Column textAlign='center'>
          <Button
            inverted
            circular
            color='white'
            icon='chevron up'
            onClick={() => {
              setPoints(Math.max(MIN_POINTS, points + 1))
            }}
          />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Button
            inverted
            fluid
            disabled={
              winner === null || feeder === null || !points || (points !== PENALTY_POINTS && points < MIN_POINTS)
            }
            onClick={() => {
              nextGame()
            }}
          >
            Next Game
          </Button>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

const App = () => {
  const [data, _setData] = useState(decode(getData(DATA_NAME)))
  const scrollRef = useRef(null)
  const { names } = data

  const setData = (data) => {
    _setData(data)
    storeData(DATA_NAME, encode(data))
  }

  useEffect(() => {
    scrollRef.current && scrollRef.current.scrollIntoView({ behavior: 'smooth' })
  }, [data])

  return (
    <>
      <GlobalButtons {...{ data, setData }} />
      {(names || []).length === 4 ? (
        <Grid centered verticalAlign='middle'>
          <Grid.Row
            style={{
              height: 'calc(100vh - 16rem)',
            }}
          >
            <Grid.Column mobile={15} tablet={15} computer={8} textAlign='center'>
              <DataTable {...{ data, setData, scrollRef }} />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row
            style={{
              height: '16rem',
            }}
          >
            <Grid.Column mobile={15} tablet={15} computer={8} textAlign='center'>
              <GameButtons {...{ data, setData, scrollRef }} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      ) : (
        <NameInput {...{ data, setData }} />
      )}
    </>
  )
}

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)
root.render(<App />)
