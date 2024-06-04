// Clothes 기본 클래스 
class Clothes {
  constructor( name, price, quantity, options, info, id) {
    this.name = name; //이름
    this.price = price; //가격
    this.quantity = quantity; //수량 
    this.options = options; //옵션
    this.info = info; //정보
    this.id = id; //상품 id
  }

  toString() {
    return ` Name: ${this.name}, Price: $${this.price}, Quantity: ${this.quantity}, Options: ${this.options}, Info: ${this.info}, ID: ${this.id}`;
  }ㄴ
}

// 상의 클래스
class UpperMenu extends Clothes {
    constructor(name, price, quantity, options, info, id) {
      super(name, price, quantity, options, info, id);
      
    }
  }
  
  // 하의 클래스
  class UnderMenu extends Clothes {
    constructor(name, price, quantity, options, info, id) {
      super(name, price, quantity, options, info, id);
    }
  }

  // 액세서리 클래스
class Accessory extends Clothes {
    constructor(name, price, quantity, options, info, id) {
      super(name, price, quantity, options, info, id);
    }
  }

// 옷 목록 관리(추가,반환) 클래스
class ClothList {
    constructor() {
      this.UpperMenu = [];
      this.UnderMenu = [];
      this.Accessory = [];
    }
    addUpperMenu(UpperMenu) {  // 옷 목록 추가
        this.UpperMenu.push(UpperMenu);
      }
    
      addUnderMenu(UnderMenu) {
        this.UnderMenu.push(UnderMenu);
      }
    
      addAccessory(Accessory) {
        this.Accessory.push(Accessory);
      }
    
      getUpperMenu() { // 옷 목록 반환
        return this.UpperMenu;
      }
    
      getUnderMenu() {
        return this.UnderMenu;
      }
    
      getAccessory() {
        return this.Accessory;
      }
    }

// 옷 구매 클래스
class ClothesBuy {
    constructor(purchase) {
        this.purchase = purchase;
    }


// 바구니에서 옷을 구매
    listBasket(basket) {
        console.log("바구니에서 옷을 구매 :");
        listBasket.forEach(item => { this.purchase.purchase(item); });
    }

// 바로 옷을 구매
    buyDirectly(item) {
        console.log("바로 옷을 구매 :"); 
        this.purchase.purchase(item);
    }
}

