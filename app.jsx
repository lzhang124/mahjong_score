const { useEffect, useRef, useState } = React
const { Button, Grid, Input, Table, Transition } = semanticUIReact

const DATA_NAME = 'MahJongData'
const WINDS = ['東', '南', '西', '北']
const MIN_POINTS = 8
const POINT_OPTIONS = [1, 2, 4, 6, 8, 12, 16, 24, 32, 48, 64, 88]
const DEFAULT_DATA = {
  names: [],
  minPoints: MIN_POINTS,
  scores: [],
  winds: [],
  dealers: [],
  winners: [],
  feeders: [],
  wind: null,
  dealer: null,
}

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

const GlobalButtons = ({ data, setData, showHelp, setShowHelp }) => {
  const { names, scores, winds, dealers, winners, feeders, wind, dealer } = data
  const [menuOpen, setMenuOpen] = useState(false)
  const [confirmUndoOpen, setConfirmUndoOpen] = useState(false)
  const [confirmResetOpen, setConfirmResetOpen] = useState(false)
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
              setConfirmUndoOpen(false)
              setConfirmResetOpen(false)
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
          <div className='button'>
            <Transition visible={menuOpen} animation='fade down' duration={300}>
              <Button
                basic
                inverted
                circular
                icon={'help'}
                active={showHelp}
                onClick={() => {
                  setShowHelp(!showHelp)
                  setConfirmUndoOpen(false)
                  setConfirmResetOpen(false)
                }}
              />
            </Transition>
          </div>
          {scores.length > 0 && (
            <div className='button'>
              <Transition visible={confirmUndoOpen} animation='fade left' duration={300}>
                <Button
                  className='popup-button'
                  basic
                  inverted
                  circular
                  icon='checkmark'
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
                    setConfirmUndoOpen(false)
                  }}
                />
              </Transition>
              <Transition visible={menuOpen} animation='fade down' duration={300}>
                <Button
                  basic
                  inverted
                  circular
                  icon={'undo'}
                  onClick={() => {
                    setConfirmUndoOpen(!confirmUndoOpen)
                    setConfirmResetOpen(false)
                  }}
                />
              </Transition>
            </div>
          )}
          <div className='button'>
            <Transition visible={confirmResetOpen} animation='fade left' duration={300}>
              <Button
                className='popup-button'
                basic
                inverted
                circular
                icon='checkmark'
                onClick={() => {
                  setData(DEFAULT_DATA)
                  setConfirmUndoOpen(false)
                }}
              />
            </Transition>
            <Transition visible={menuOpen} animation='fade down' duration={300}>
              <Button
                basic
                inverted
                circular
                icon={'refresh'}
                onClick={() => {
                  setConfirmResetOpen(!confirmResetOpen)
                  setConfirmUndoOpen(false)
                }}
              />
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
              setConfirmUndoOpen(false)
              setConfirmResetOpen(false)
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
              setConfirmUndoOpen(false)
              setConfirmResetOpen(false)
            }}
          />
        </Transition>
      </div>
    </div>
  )
}

const NameInput = ({ data, setData }) => {
  const { names, minPoints } = data
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
      <Grid.Column mobile={15} tablet={15} computer={8} textAlign='center'>
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
        <div className='minPoints'>
          {[...Array(MIN_POINTS).keys()]
            .map((p) => p + 1)
            .map((p, i) => (
              <Button
                inverted
                circular
                color='white'
                active={minPoints === p}
                onClick={() => {
                  setData({
                    ...data,
                    ...{
                      minPoints: p,
                    },
                  })
                }}
              >
                {p}
              </Button>
            ))}
        </div>
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

const PointGuide = () => {
  const renderExample = (example) => {
    return (
      <>
        {example && example.map((tile) => <span className={COLOR_CLASSNAMES[tile[1]]}>{tile[0].toUpperCase()}</span>)}
      </>
    )
  }

  return (
    <div className='pointGuide'>
      <Table basic inverted>
        <Table.Body>
          {POINTS_DATA.map(({ points, hands }) => {
            return hands.map(({ name, description, example }, i) => (
              <Table.Row>
                {i === 0 && <Table.Cell rowSpan={hands.length}>{points}</Table.Cell>}
                <Table.Cell>{name}</Table.Cell>
                <Table.Cell>{description}</Table.Cell>
                <Table.Cell>{renderExample(example)}</Table.Cell>
              </Table.Row>
            ))
          })}
        </Table.Body>
      </Table>
    </div>
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

const GameButtons = ({ data, setData }) => {
  const { names, minPoints, scores, winds, dealers, winners, feeders, wind, dealer } = data
  const [winner, setWinner] = useState(null)
  const [feeder, setFeeder] = useState(null)
  const [points, setPoints] = useState(minPoints)
  const penaltyPoints = -2 * minPoints

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
      var multiplier = 2
      var i = dealers.length - 1
      while (i >= 0) {
        var d = dealers[i]
        var w = winners[i]
        if (dealer === d && winner === d) {
          if (w === d) {
            multiplier += 1
          }
        } else {
          break
        }
        i--
      }
      winner === feeder ? (game = game.map((s) => s * multiplier)) : (game[feeder] = game[feeder] * multiplier)
      winner === dealer ? (game = game.map((s) => s * multiplier)) : (game[dealer] = game[dealer] * multiplier)
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
    setPoints(minPoints)
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
        {[penaltyPoints * 2, penaltyPoints, 0, minPoints]
          .concat(POINT_OPTIONS.filter((p) => p > minPoints))
          .map((p, i) => (
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
        <Grid.Column textAlign='center' width={2}>
          <div className='pointsLabel'>{points}</div>
        </Grid.Column>
        <Grid.Column textAlign='center'>
          <Button
            inverted
            circular
            color='white'
            icon='chevron down'
            disabled={points <= penaltyPoints * 2}
            onClick={() => {
              setPoints(
                points === minPoints ? 0 : points === 0 ? penaltyPoints : points === penaltyPoints ? penaltyPoints * 2 : points - 1
              )
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
              setPoints(
                points === penaltyPoints * 2 ? penaltyPoints : points === penaltyPoints ? 0 : points === 0 ? minPoints : points + 1
              )
            }}
          />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Button
            inverted
            fluid
            disabled={!(points === 0 || (winner !== null && (points < 0 || (feeder !== null && points >= minPoints))))}
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
  const [showHelp, setShowHelp] = useState(false)
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
      <GlobalButtons {...{ data, setData, showHelp, setShowHelp }} />
      {(names || []).length === 4 ? (
        <Grid centered verticalAlign='middle'>
          <Grid.Row
            style={{
              height: 'calc(100vh - 16rem)',
            }}
          >
            {showHelp ? (
              <Grid.Column mobile={15} tablet={15} computer={12} textAlign='center'>
                <PointGuide />
              </Grid.Column>
            ) : (
              <Grid.Column mobile={15} tablet={15} computer={8} textAlign='center'>
                <DataTable {...{ data, setData, scrollRef }} />
              </Grid.Column>
            )}
          </Grid.Row>
          <Grid.Row
            style={{
              height: '16rem',
            }}
          >
            <Grid.Column mobile={15} tablet={15} computer={12} textAlign='center'>
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
