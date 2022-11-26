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
        'name': 'Edge Wait',
        'description': '3/7 tile of a chi',
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
        'description': '123 789, one suit',
        'example': ['1g', '2g', '3g', ' ', '7g', '8g', '9g'],
      },
      {
        'name': 'Short Straight',
        'description': '6 straight, one suit',
        'example': ['3g', '4g', '5g', ' ', '6g', '7g', '8g'],
      },
      {
        'name': '2x Pure Chi',
        'description': '2x chi, one suit, same sequence',
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
        'description': '4x chi, no words',
        'example': ['1g', '2g', '3g', ' ', '3g', '4g', '5g', ' ', '2r', '3r', '4r', ' ', '6b', '7b', '8b', ' ', '3r', '3r'],
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
        'description': 'only one suit, can include words',
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
        'example': ['1g', '4g', '7g', ' ', '2r', '5r', '8r', ' ', '3b', '9b', ' ', 'gg', 'rr', 'bb', 'wb', 'wb', 'wb'],
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
        'description': '9 straight, one suit',
        'example': ['1g', '2g', '3g', ' ', '4g', '5g', '6g', ' ', '7g', '8g', '9g'],
      },
      {
        'name': '3x Pure Shifted Chi',
        'description': '3x chi, one suit, shifted 1/2',
        'example': ['1g', '2g', '3g', ' ', '3g', '4g', '5g', ' ', '5g', '6g', '7g'],
      },
      {
        'name': '3 Suit Terminal Chi',
        'description': '2x 123 789 + 5 pair, different suit',
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
      {
        'name': '7 Pairs',
        'example': ['6g', '6g', ' ', '9g', '9g', ' ', '2r', '2r', ' ', '5b', '5b', ' ', '7b', '7b', ' ', 'gg', 'gg', ' ', 'wb', 'wb'],
      },
      {
        'name': 'Greater Knitted + Words',
        'description': 'all words and knitted sequences, different suit',
        'example': ['1g', '4g', '7g', ' ', '2r', '5r', '8r', ' ', '3b', ' ', 'gg', 'rr', 'bb', 'wb', 'wb', 'wb', 'wb'],
      },
      {
        'name': 'All Even Peng',
        'description': '4x peng/gang, only even',
        'example': ['2g', '2g', '2g', ' ', '2r', '2r', '2r', ' ', '8r', '8r', '8r', ' ', '6b', '6b', '6b', ' ', '4b', '4b'],
      },
      {
        'name': 'Full Flush',
        'description': 'only one suit',
        'example': ['1g', '1g', '1g', ' ', '3g', '3g', '3g', ' ', '4g', '5g', '6g', ' ', '6g', '7g', '8g', ' ', '9g', '9g'],
      },
      {
        'name': '3x Pure Chi',
        'description': '3x chi, same sequence, one suit',
        'example': ['2g', '3g', '4g', ' ', '2g', '3g', '4g', ' ', '2g', '3g', '4g'],
      },
      {
        'name': '3x Pure Shifted Peng',
        'description': '3x peng/gang, one suit, shifted 1',
        'example': ['2g', '2g', '2g', ' ', '3g', '3g', '3g', ' ', '4g', '4g', '4g'],
      },
      {
        'name': 'Lower 3',
        'description': 'only 1-3',
        'example': ['1g', '1g', '1g', ' ', '1g', '2g', '3g', ' ', '3r', '3r', '3r', ' ', '1b', '2b', '3b', ' ', '3b', '3b'],
      },
      {
        'name': 'Middle 3',
        'description': 'only 4-6',
        'example': ['4g', '4g', '4g', ' ', '4g', '5g', '6g', ' ', '6r', '6r', '6r', ' ', '4b', '5b', '6b', ' ', '6b', '6b'],
      },
      {
        'name': 'Upper 3',
        'description': 'only 7-9',
        'example': ['7g', '7g', '7g', ' ', '7g', '8g', '9g', ' ', '9r', '9r', '9r', ' ', '7b', '8b', '9b', ' ', '9b', '9b'],
      },
    ],
  },
  {
    'points': 32,
    'hands': [
      {
        'name': '4x Pure Shifted Chi',
        'description': '4x chi, one suit, shifted 1/2',
        'example': ['1g', '2g', '3g', ' ', '3g', '4g', '5g', ' ', '5g', '6g', '7g', ' ', '7g', '8g', '9g'],
      },
      {
        'name': '3x Gang',
      },
      {
        'name': 'All Terminal + Words',
        'description': 'only 1/9/word',
        'example': ['1g', '1g', '1g', ' ', '9r', '9r', '9r', ' ', 'gg', 'gg', 'gg', ' ', 'rr', 'rr', 'rr', ' ', '1b', '1b'],
      },
    ],
  },
  {
    'points': 48,
    'hands': [
      {
        'name': '4x Pure Chi',
        'description': '4x chi, same sequence, one suit',
        'example': ['2g', '3g', '4g', ' ', '2g', '3g', '4g', ' ', '2g', '3g', '4g', ' ', '2g', '3g', '4g'],
      },
      {
        'name': '4x Pure Shifted Peng',
        'description': '4x peng/gang, one suit, shifted 1',
        'example': ['2g', '2g', '2g', ' ', '3g', '3g', '3g', ' ', '4g', '4g', '4g', ' ', '5g', '5g', '5g'],
      },
    ],
  },
  {
    'points': 64,
    'hands': [
      {
        'name': 'All Terminal',
        'description': 'only 1/9',
        'example': ['1g', '1g', '1g', ' ', '9g', '9g', '9g', ' ', '1r', '1r', '1r', ' ', '1b', '1b', '1b', ' ', '9b', '9b'],
      },
      {
        'name': 'Lesser 4x Winds',
        'description': '3x wind peng/gang + 1 wind pair',
        'example': ['wb', 'wb', 'wb', ' ', 'wb', 'wb', 'wb', ' ', 'wb', 'wb', 'wb', ' ', 'wb', 'wb'],
      },
      {
        'name': 'Lesser 3x Dragon',
        'description': '2x GRB peng/gang + 1 GRB pair',
        'example': ['gg', 'gg', 'gg', ' ', 'rr', 'rr', 'rr', ' ', 'bb', 'bb'],
      },
      {
        'name': 'All Words',
        'description': 'only words',
        'example': ['gg', 'gg', 'gg', ' ', 'rr', 'rr', 'rr', ' ', 'wb', 'wb', 'wb', ' ', 'wb', 'wb', 'wb', ' ', 'wb', 'wb'],
      },
      {
        'name': '4x Concealed Peng',
      },
      {
        'name': 'Pure Terminal Chi',
        'description': '2x 123 789 + 5 pair, one suit',
        'example': ['1r', '2r', '3r', ' ', '1r', '2r', '3r', ' ', '7r', '8r', '9r', ' ', '7r', '8r', '9r', ' ', '5r', '5r'],
      },
    ],
  },
  {
    'points': 88,
    'hands': [
      {
        'name': 'Greater 4x Winds',
        'description': '4x wind peng/gang',
        'example': ['wb', 'wb', 'wb', ' ', 'wb', 'wb', 'wb', ' ', 'wb', 'wb', 'wb', ' ', 'wb', 'wb', 'wb'],
      },
      {
        'name': 'Greater 3x Dragon',
        'description': '3x GRB peng/gang',
        'example': ['gg', 'gg', 'gg', ' ', 'rr', 'rr', 'rr', ' ', 'bb', 'bb', 'bb'],
      },
      {
        'name': 'All Green',
        'description': 'only 23468 sticks, G',
        'example': ['2g', '3g', '4g', ' ', '3g', '3g', '3g', ' ', '4g', '4g', '4g', ' ', '6g', '6g', '6g', ' ', 'gg', 'gg'],
      },
      {
        'name': '9 Gates',
        'description': '1112345678999 + 1-9, one suit',
        'example': ['1r', '1r', '1r', '2r', '3r', '4r', '5r', '6r', '7r', '8r', '9r', '9r', '9r', ' ', '7r'],
      },
      {
        'name': '4x Gang',
      },
      {
        'name': '7 Shifted Pairs',
        'description': '7x pairs, one suit, shifted 1',
        'example': ['2g', '2g', ' ', '3g', '3g', ' ', '4g', '4g', ' ', '5g', '5g', ' ', '6g', '6g', ' ', '7g', '7g', ' ', '8g', '8g'],
      },
      {
        'name': '13 Orphans',
        'description': '191919grbwwww + word',
        'example': ['1g', '9g', '1r', '9r', '1b', '9b', 'gg', 'rr', 'bb', 'wb', 'wb', 'wb', 'wb', ' ', 'wb'],
      },
    ],
  },
]

COLOR_CLASSNAMES = {'r': 'red', 'g': 'green', 'b': 'white'}
