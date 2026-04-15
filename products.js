const catalog = {
  //************************ BUNDLES
  'BasicBundle1': { 
    type: 'bundle', 
    price: 30,
    description: "Includes a heat-changing mug and 40oz ombre tumbler. Perfect starter gift set.",
    variants: { 
        'default': [
        "https://raw.githubusercontent.com/diminfomacon-beep/Mothers_Day/main/images/ceramic%20mug%20heat%20changing.png", 
        "https://raw.githubusercontent.com/diminfomacon-beep/Mothers_Day/main/images/Big%20Swig%20ombre%2040%204.png"
        ] 
    }
},
  'BasicBundle2': { 
    type: 'bundle', price: 30, 
    variants: { 'default': ["https://raw.githubusercontent.com/diminfomacon-beep/Mothers_Day/main/images/ceramic%20mug%20heat%20changing.png"] }
  },
  //************************ PRODUCTS
  'Keychain': { 
    type: 'product', price: 15, 
    variants: { 
      'Heart Shaped': ["https://raw.githubusercontent.com/diminfomacon-beep/Mothers_Day/main/images/Big%20Swig%20ombre%2040%204.png", "https://raw.githubusercontent.com/diminfomacon-beep/Mothers_Day/main/images/candle%20white.png"], 
      'Circle': ["https://raw.githubusercontent.com/diminfomacon-beep/Mothers_Day/main/images/Glass%20coffee%20mug%20matte.png"],
      'Diamond': ["https://raw.githubusercontent.com/diminfomacon-beep/Mothers_Day/main/images/Big%20Swig%20ombre%2040%204.png", "https://raw.githubusercontent.com/diminfomacon-beep/Mothers_Day/main/images/candle%20white.png"], 
      'Rectangle': ["https://raw.githubusercontent.com/diminfomacon-beep/Mothers_Day/main/images/Big%20Swig%20ombre%2040%204.png", "https://raw.githubusercontent.com/diminfomacon-beep/Mothers_Day/main/images/candle%20white.png"], 
      'Dog Bone': ["https://raw.githubusercontent.com/diminfomacon-beep/Mothers_Day/main/images/Big%20Swig%20ombre%2040%204.png", "https://raw.githubusercontent.com/diminfomacon-beep/Mothers_Day/main/images/candle%20white.png"], 
      'pink': ["https://raw.githubusercontent.com/diminfomacon-beep/Mothers_Day/main/images/Big%20Swig%20ombre%2040%204.png", "https://raw.githubusercontent.com/diminfomacon-beep/Mothers_Day/main/images/candle%20white.png"]

    }
  },
  'Car Window Sign - 5.5"': { 
    type: 'product', price: 5, 
    variants: { 
      'Magnetic': ["https://raw.githubusercontent.com/diminfomacon-beep/Mothers_Day/main/images/candle%20white.png"], 
      'silver': ["https://raw.githubusercontent.com/diminfomacon-beep/Mothers_Day/main/images/ceramic%20mug%20heat%20changing.png"] 
    }
  },
  'Mini Tote': { 
    type: 'product', price: 15, 
    variants: { 
      'pink': ["https://raw.githubusercontent.com/diminfomacon-beep/Mothers_Day/main/images/Big%20Swig%20ombre%2040%204.png", "https://raw.githubusercontent.com/diminfomacon-beep/Mothers_Day/main/images/candle%20white.png"], 
      'blue': ["https://raw.githubusercontent.com/diminfomacon-beep/Mothers_Day/main/images/Glass%20coffee%20mug%20matte.png"] 
    }
  },
  'Keychain': { 
    type: 'product', price: 5, 
    variants: { 
      'gold': ["https://raw.githubusercontent.com/diminfomacon-beep/Mothers_Day/main/images/candle%20white.png"], 
      'silver': ["https://raw.githubusercontent.com/diminfomacon-beep/Mothers_Day/main/images/ceramic%20mug%20heat%20changing.png"] 
    }
  },'Tumbler': { 
    type: 'product', price: 15, 
    variants: { 
      'pink': ["https://raw.githubusercontent.com/diminfomacon-beep/Mothers_Day/main/images/Big%20Swig%20ombre%2040%204.png", "https://raw.githubusercontent.com/diminfomacon-beep/Mothers_Day/main/images/candle%20white.png"], 
      'blue': ["https://raw.githubusercontent.com/diminfomacon-beep/Mothers_Day/main/images/Glass%20coffee%20mug%20matte.png"] 
    }
  },
  'Keychain': { 
    type: 'product', price: 5, 
    variants: { 
      'gold': ["https://raw.githubusercontent.com/diminfomacon-beep/Mothers_Day/main/images/candle%20white.png"], 
      'silver': ["https://raw.githubusercontent.com/diminfomacon-beep/Mothers_Day/main/images/ceramic%20mug%20heat%20changing.png"] 
    }
  },'Tumbler': { 
    type: 'product', price: 15, 
    variants: { 
      'pink': ["https://raw.githubusercontent.com/diminfomacon-beep/Mothers_Day/main/images/Big%20Swig%20ombre%2040%204.png", "https://raw.githubusercontent.com/diminfomacon-beep/Mothers_Day/main/images/candle%20white.png"], 
      'blue': ["https://raw.githubusercontent.com/diminfomacon-beep/Mothers_Day/main/images/Glass%20coffee%20mug%20matte.png"] 
    }
  },
  'Keychain': { 
    type: 'product', price: 5, 
    variants: { 
      'gold': ["https://raw.githubusercontent.com/diminfomacon-beep/Mothers_Day/main/images/candle%20white.png"], 
      'silver': ["https://raw.githubusercontent.com/diminfomacon-beep/Mothers_Day/main/images/ceramic%20mug%20heat%20changing.png"] 
    }
  },
  'Candle': { 
    type: 'product', price: 12, 
    variants: { 'default': ["https://raw.githubusercontent.com/diminfomacon-beep/Mothers_Day/main/images/candle%20white.png"] }
  }
};
window.catalog = catalog;
