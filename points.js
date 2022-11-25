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
        'description': 'can include word tiles'
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
        'description': '2x chi, same sequence, same suit',
        'example': ['5g', '6g', '7g', ' ', '5g', '6g', '7g'],
      },
      {
        'name': '2x Mixed Chi',
        'description': '2x chi, same sequence, different suits',
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
    ],
  },
  {
    'points': 8,
    'hands': [
    ],
  },
  {
    'points': 12,
    'hands': [
    ],
  },
  {
    'points': 16,
    'hands': [
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
        'name': '4x Shifted Peng',
        'description': '4x peng/gang, same suit, shifted',
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
