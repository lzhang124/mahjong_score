POINTS_DATA = [
  {
    'points': 1,
    'hands': [
      {
        'name': 'Flower',
        'description': '1 per flower, doesn\'t count towards min',
      },
      {
        'name': 'Self Draw',
      },
      {
        'name': 'Pair Wait',
        'description': 'completes pair',
      },
      {
        'name': 'Middle Wait',
        'description': 'middle tile of a chi',
      },
      {
        'name': 'No Words',
      },
      {
        'name': 'Missing Suit',
        'description': 'can include words'
      },
      {
        'name': 'Gang',
      },
      {
        'name': '1/9/Wind Peng',
        'description': '1/9/wind peng/gang',
      },
      {
        'name': '2x Terminal Chi',
        'description': '123 789, same suit',
        'example': ['1g', '2g', '3g', ' ', '7g', '8g', '9g'],
      },
      {
        'name': 'Short Straight',
        'description': '6 straight, same suit',
        'example': ['3g', '4g', '5g', ' ', '6g', '7g', '8g'],
      },
      {
        'name': '2x Pure Chi',
        'description': '2x chi, same suit, same sequence',
        'example': ['5g', '6g', '7g', ' ', '5g', '6g', '7g'],
      },
      {
        'name': '2x Mixed Chi',
        'description': '2x chi, different suits, same sequence',
        'example': ['5g', '6g', '7g', ' ', '5r', '6r', '7r'],
      },
    ],
  },
  {
    'points': 2,
    'hands': [
      {
        'name': 'Concealed Hand',
        'description': 'all sets concealed, won by discard',
      },
      {
        'name': 'Dragon Peng',
        'description': 'GRB peng/gang',
      },
      {
        'name': 'Seat/Table Wind',
        'description': 'seat/table wind peng/gang',
      },
      {
        'name': 'Tile Hog',
        'description': '4x suit tile, no gang',
      },
      {
        'name': 'All Chi',
        'description': '4x chi',
        'example': ['1g', '2g', '3g', ' ', '3g', '4g', '5g', ' ', '2r', '3r', '4r', ' ', '6b', '7b', '8b', ' ', '3r', '4r'],
      },
      {
        'name': '2x Peng',
        'description': '2x peng/gang, same number',
        'example': ['5g', '5g', '5g', ' ', '5r', '5r', '5r'],
      },
      {
        'name': '2x Concealed Peng',
      },
      {
        'name': 'Concealed Gang',
      },
      {
        'name': 'All Simples',
        'description': 'only 2-8',
        'example': ['2g', '2g', '2g', ' ', '3r', '4r', '5r', ' ', '4r', '5r', '6r', ' ', '8b', '8b', '8b', ' ', '7g', '7g'],
      },
    ],
  },
  {
    'points': 4,
    'hands': [
      {
        'name': 'Fully Concealed Hand',
        'description': 'all sets concealed, won by self draw',
      },
      {
        'name': 'Last Tile',
        'description': 'last tile of its kind, other 3 must be visible to winner',
      },
      {
        'name': 'Outside Hand',
        'description': 'all sets have 1/9/word',
        'example': ['1g', '2g', '3g', ' ', '7r', '8r', '9r', ' ', '9g', '9g', '9g', ' ', 'gg', 'gg', 'gg', ' ', 'wb', 'wb'],
      },
      {
        'name': '2x Gang',
      },
    ],
  },
  {
    'points': 6,
    'hands': [
      {
        'name': 'Fully Revealed Hand',
        'description': 'all sets revealed, won by discard',
      },
      {
        'name': 'All Peng',
        'description': '4x peng/gang',
        'example': ['3g', '3g', '3g', ' ', '4r', '4r', '4r', ' ', '8r', '8r', '8r', ' ', 'bb', 'bb', 'bb', ' ', 'wb', 'wb'],
      },
      {
        'name': 'Half Flush',
        'description': 'all one suit, can include words',
        'example': ['3g', '3g', '3g', ' ', '4g', '5g', '6g', ' ', '8g', '8g', '8g', ' ', 'bb', 'bb', 'bb', ' ', 'wb', 'wb'],
      },
      {
        'name': '3x Mixed Shifted Chi',
        'description': '3x chi, different suit, shifted 1',
        'example': ['4g', '5g', '6g', ' ', '5r', '6r', '7r', ' ', '6b', '7b', '8b'],
      },
      {
        'name': 'All Types',
        'description': 'all sets of different type (suit, winds, GRB)',
        'example': ['1g', '2g', '3g', ' ', '5r', '5r', '5r', ' ', '6b', '7b', '8b', ' ', 'bb', 'bb', 'bb', ' ', 'wb', 'wb'],
      },
      {
        'name': '2x Dragon Peng',
        'description': '2x GRB peng/gang',
      },
    ],
  },
  {
    'points': 8,
    'hands': [
      {
        'name': 'Chicken Hand',
        'description': 'hand worth 0',
      },
      {
        'name': 'Last Tile',
        'description': 'self draw or discard',
      },
      {
        'name': 'Gang Replacement',
        'description': 'replacement tile from gang',
      },
      {
        'name': 'Robbing the Gang',
        'description': 'tile used to make gang',
      },
      {
        'name': '2x Concealed Gang',
      },
      {
        'name': 'Mixed Straight',
        'description': '9 straight, different suit',
        'example': ['1g', '2g', '3g', ' ', '4r', '5r', '6r', ' ', '7b', '8b', '9b'],
      },
      {
        'name': 'Reversible Tiles',
        'description': 'only 245689 sticks, 1234589 stones, B',
        'example': ['4g', '5g', '6g', ' ', '8b', '8b', '8b', ' ', '9g', '9g', '9g', ' ', '3b', '4b', '5b', ' ', 'bb', 'bb'],
      },
      {
        'name': '3x Mixed Chi',
        'description': '3x chi, different suit, same sequence',
        'example': ['5g', '6g', '7g', ' ', '5r', '6r', '7r', ' ', '5b', '6b', '7b'],
      },
      {
        'name': '3x Mixed Shifted Peng',
        'description': '3x peng/gang, different suit, shifted 1',
        'example': ['6g', '6g', '6g', ' ', '7r', '7r', '7r', ' ', '8b', '8b', '8b'],
      },
    ],
  },
  {
    'points': 12,
    'hands': [
      {
        'name': 'Lesser Knitted + Words',
        'description': 'any words and knitted sequences, different suit',
        'example': ['1g', '4g', '7g', ' ', '2r', '5r', '8r', ' ', '3b', '9b', ' ', 'W', 'W', 'W', 'G', 'R', 'B'],
      },
      {
        'name': 'Knitted Straight',
        'description': '3x knitted sequences, different suit',
        'example': ['1g', '4g', '7g', ' ', '2r', '5r', '8r', ' ', '3b', '6b', '9b'],
      },
      {
        'name': 'Lower 4',
        'description': 'only 1-4',
        'example': ['1g', '2g', '3g', ' ', '4g', '4g', '4g', ' ', '3r', '3r', '3r', ' ', '2b', '3b', '4b', ' ', '1b', '1b'],
      },
      {
        'name': 'Upper 4',
        'description': 'only 6-9',
        'example': ['6g', '6g', '6g', ' ', '7g', '8g', '9g', ' ', '9r', '9r', '9r', ' ', '6b', '7b', '8b', ' ', '9b', '9b'],
      },
      {
        'name': '3x Winds',
        'description': '3x wind peng/gang',
        'example': ['wb', 'wb', 'wb', ' ', 'wb', 'wb', 'wb', ' ', 'wb', 'wb', 'wb'],
      },
    ],
  },
  {
    'points': 16,
    'hands': [
      {
        'name': 'Pure Straight',
        'description': '9 straight, same suit',
        'example': ['1g', '2g', '3g', ' ', '4g', '5g', '6g', ' ', '7g', '8g', '9g'],
      },
      {
        'name': '3x Pure Shifted Chi',
        'description': '3x chi, same suit, shifted 1/2',
        'example': ['1g', '2g', '3g', ' ', '3g', '4g', '5g', ' ', '5g', '6g', '7g'],
      },
      {
        'name': '3 Suit Terminal Chi',
        'description': '2x 123 789, 5 pair, different suit',
        'example': ['1g', '2g', '3g', ' ', '7g', '8g', '9g', ' ', '1r', '2r', '3r', ' ', '7r', '8r', '9r', ' ', '5b', '5b'],
      },
      {
        'name': 'All 5',
        'description': '5 in every set, including pair',
        'example': ['3g', '4g', '5g', ' ', '5g', '6g', '7g', ' ', '4r', '5r', '6r', ' ', '5r', '5r', '5r', ' ', '5b', '5b'],
      },
      {
        'name': '3x Peng',
        'description': '3x peng/gang, same number',
        'example': ['5g', '5g', '5g', ' ', '5r', '5r', '5r', ' ', '5b', '5b', '5b'],
      },
      {
        'name': '3x Concealed Peng',
      },
    ],
  },
  {
    'points': 24,
    'hands': [
    ],
  },
  {
    'points': 32,
    'hands': [
    ],
  },
  {
    'points': 48,
    'hands': [
      {
        'name': '4x Pure Chi',
        'description': '4x chi, same sequence, same suit',
        'example': ['2g', '3g', '4g', ' ', '2g', '3g', '4g', ' ', '2g', '3g', '4g', ' ', '2g', '3g', '4g'],
      },
      {
        'name': '4x Pure Shifted Peng',
        'description': '4x peng/gang, same suit, shifted 1',
        'example': ['2g', '2g', '2g', ' ', '3g', '3g', '3g', ' ', '4g', '4g', '4g', ' ', '5g', '5g', '5g'],
      },
    ],
  },
  {
    'points': 64,
    'hands': [
    ],
  },
  {
    'points': 88,
    'hands': [
    ],
  },
]

COLOR_CLASSNAMES = {'r': 'red', 'g': 'green', 'b': 'white'}
