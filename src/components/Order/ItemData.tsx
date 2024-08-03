import { Item } from "@/types/item";
import ItemSelection from "./ItemSelection";

const ItemData: Item[] = [
  {
    id: 1,
    sort: "laundry",
    icon: "/images/order/1_5)_2_Bags_of_8kg_Wash_-_Vector.png",
    title: "6kg Wash, Dry & Fold x 2",
    paragraph: "(White + Colour Wash) (Excl Blankets, Pillow & Duvets) (Minimum Wash at 30 Degree) (Medium Heat Tumble Dry)",
    oldprice: 35.00,
    newprice: 34.65,
  },
  {
    id: 2,
    sort: "laundry",
    icon: "/images/order/2)_8kg_Wash,_Dry,_Fold3.png",
    title: "6 Kg Wash dry & fold",
    paragraph: "(1 x Mix Wash) (Excl Blankets, Pillow & Duvets) (No Colour Seperation) (Minimum Wash at 30 Degree) (Medium Heat Tumble Dry)",
    oldprice: 0,
    newprice: 17.50,
  },
  {
    id: 3,
    sort: "iron",
    icon: "/images/order/1__Shirt_on_Hanger_(1).png",
    title: "Shirt on Hanger (P)",
    paragraph: "Mens Formal Shirts",
    oldprice: 0,
    newprice: 2.50,
  },
  {
    id: 4,
    sort: "iron",
    icon: "/images/order/2__T-Shirt_(1).png",
    title: "T Shirt (P)",
    paragraph: "",
    oldprice: 0,
    newprice: 2.50,
  },
  {
    id: 5,
    sort: "iron",
    icon: "/images/order/3__Shirt_T-Shirt_Fold2.png",
    title: "Shirt/TShirt Fold (P)",
    paragraph: "",
    oldprice: 0,
    newprice: 3.00,
  },
  {
    id: 6,
    sort: "iron",
    icon: "/images/order/4__Trouser1.png",
    title: "Trouser (P)",
    paragraph: "",
    oldprice: 0,
    newprice: 5.00,
  },
  {
    id: 7,
    sort: "iron",
    icon: "/images/order/6__Skirt.png",
    title: "Skirt (P)",
    paragraph: "",
    oldprice: 0,
    newprice: 4.90,
  },
  {
    id: 8,
    sort: "iron",
    icon: "/images/order/7__Dress.png",
    title: "Dress (P)",
    paragraph: "",
    oldprice: 0,
    newprice: 9.15,
  },
  {
    id: 9,
    sort: "iron",
    icon: "/images/order/8__Dress_Mexi_(1).png",
    title: "JumpSuit",
    paragraph: "",
    oldprice: 0,
    newprice: 10.40,
  },
  {
    id: 10,
    sort: "iron",
    icon: "/images/order/9__Evening_Dress.png",
    title: "Evening Dress (P)",
    paragraph: "",
    oldprice: 0,
    newprice: 15.00,
  },
  {
    id: 11,
    sort: "iron",
    icon: "/images/order/10__Jacket.png",
    title: "Jacket (P)",
    paragraph: "",
    oldprice: 0,
    newprice: 6.90,
  },
  {
    id: 12,
    sort: "iron",
    icon: "/images/order/11__Cardigan_(1).png",
    title: "Cardigan (P)",
    paragraph: "",
    oldprice: 0,
    newprice: 5.00,
  },
  {
    id: 13,
    sort: "iron",
    icon: "/images/order/12__2_Piece_Suit.png",
    title: "2 Piece Suit (P)",
    paragraph: "",
    oldprice: 0,
    newprice: 10.00,
  },
  {
    id: 14,
    sort: "iron",
    icon: "/images/order/13__Jeans.png",
    title: "Jeans (P)",
    paragraph: "",
    oldprice: 0,
    newprice: 5.00,
  },
  {
    id: 15,
    sort: "iron",
    icon: "/images/order/18__Bed_Sheet_Single.png",
    title: "Bed Sheet Single (P)",
    paragraph: "",
    oldprice: 0,
    newprice: 4.00,
  },
  {
    id: 16,
    sort: "iron",
    icon: "/images/order/19__Bed_Sheet_Double.png",
    title: "Bed Sheet Double (P)",
    paragraph: "",
    oldprice: 0,
    newprice: 6.00,
  },
  {
    id: 17,
    sort: "iron",
    icon: "/images/order/20__Bed_Sheet_King.png",
    title: "Bed Sheet King (P)",
    paragraph: "",
    oldprice: 0,
    newprice: 6.00,
  },
  {
    id: 18,
    sort: "iron",
    icon: "/images/order/21__Duvet_Cover_Single.png",
    title: "Duvet Cover Single (P)",
    paragraph: "",
    oldprice: 0,
    newprice: 6.20,
  },
  {
    id: 19,
    sort: "iron",
    icon: "/images/order/21__Duvet_Cover_Double.png",
    title: "Duvet Cover Double(P)",
    paragraph: "",
    oldprice: 0,
    newprice: 7.75,
  },
  {
    id: 20,
    sort: "iron",
    icon: "/images/order/21__Duvet_Cover_King.png",
    title: "Duvet Cover King (P)",
    paragraph: "",
    oldprice: 0,
    newprice: 7.75,
  },
  {
    id: 21,
    sort: "iron",
    icon: "/images/order/17__Pillow_Case.png",
    title: "Pillow Case(P)",
    paragraph: "",
    oldprice: 0,
    newprice: 1.90,
  },
  {
    id: 22,
    sort: "iron",
    icon: "/images/order/14__Shorts.png",
    title: "Shorts (P)",
    paragraph: "",
    oldprice: 0,
    newprice: 3.75,
  },
  {
    id: 23,
    sort: "iron",
    icon: "/images/order/16__Ironing.png",
    title: "Ironing",
    paragraph: "(Per Kg) (On Hanger)",
    oldprice: 0,
    newprice: 12.00,
  },
  {
    id: 24,
    sort: "home",
    icon: "/images/order/1__Single_Bed_Set.png",
    title: "Single Bed Set",
    paragraph: "(Wash & Iron) B Sheet, D Cover & P Case",
    oldprice: 16.20,
    newprice: 14.85,
  },
  {
    id: 25,
    sort: "home",
    icon: "/images/order/2__Double_Bed_Set.png",
    title: "Double Bed Set",
    paragraph: "(Wash & Iron) B Sheet, D Cover & 2 P Case",
    oldprice: 21.30,
    newprice: 17.45,
  },
  {
    id: 26,
    sort: "home",
    icon: "/images/order/3__King_Queen_Bed_Set.png",
    title: "King/Queen Bed Set",
    paragraph: "(Wash & Iron) (B Sheet, D Cover & 4 P Case)",
    oldprice: 27.00,
    newprice: 21.60,
  },
  {
    id: 27,
    sort: "home",
    icon: "/images/order/4__Pillow_Caase.png",
    title: "Pillow Case",
    paragraph: "(Wash & Iron)",
    oldprice: 0,
    newprice: 2.20,
  },
  {
    id: 28,
    sort: "home",
    icon: "/images/order/5__Bed_Sheet_Single.png",
    title: "Sheet Single",
    paragraph: "(Wash & Iron)",
    oldprice: 0,
    newprice: 5.25,
  },
  {
    id: 29,
    sort: "home",
    icon: "/images/order/6__Bed_Sheet_Double.png",
    title: "Sheet Double",
    paragraph: "(Wash & Iron)",
    oldprice: 0,
    newprice: 6.90,
  },
  {
    id: 30,
    sort: "home",
    icon: "/images/order/7__Bed_Sheet_King.png",
    title: "Sheet King Size",
    paragraph: "(Wash & Iron)",
    oldprice: 0,
    newprice: 7.70,
  },
  {
    id: 31,
    sort: "home",
    icon: "/images/order/9__Duvet_Cover_Single.png",
    title: "Duvet Cover Single",
    paragraph: "(Wash & Iron)",
    oldprice: 0,
    newprice: 8.75,
  },
  {
    id: 32,
    sort: "home",
    icon: "/images/order/10__Duvet_Cover_Double.png",
    title: "Duvet Cover Double",
    paragraph: "(Wash & Iron)",
    oldprice: 0,
    newprice: 10.00,
  },
  {
    id: 33,
    sort: "home",
    icon: "/images/order/11__Duvet_Cover_King.png",
    title: "Duvet Cover King",
    paragraph: "(Wash & Iron)",
    oldprice: 0,
    newprice: 10.50,
  },
  {
    id: 34,
    sort: "home",
    icon: "/images/order/12__Duvet_Cover_Queen_(1).png",
    title: "Duvet Cover Queen",
    paragraph: "(Wash & Iron)",
    oldprice: 0,
    newprice: 10.75,
  },
  {
    id: 35,
    sort: "home",
    icon: "/images/order/13__Pillow_(1).png",
    title: "Feather Pillow",
    paragraph: "(Wash or Dry Clean) Can take upto 72 Hours",
    oldprice: 0,
    newprice: 14.00,
  },
  {
    id: 36,
    sort: "home",
    icon: "/images/order/13__Pillow.png",
    title: "Pillow",
    paragraph: "(Wash / Dry Clean) Excludes Feather / Down",
    oldprice: 0,
    newprice: 10.00,
  },
  {
    id: 37,
    sort: "home",
    icon: "/images/order/14__Single_Duvet.png",
    title: "Single Duvet",
    paragraph: "(Wash/Dry Clean) Synthetic",
    oldprice: 0,
    newprice: 17.50,
  },
  {
    id: 38,
    sort: "home",
    icon: "/images/order/15__Double_Duvet.png",
    title: "Double Duvet",
    paragraph: "(Wash/Dry Clean) Synthetic",
    oldprice: 0,
    newprice: 22.50,
  },
  {
    id: 39,
    sort: "home",
    icon: "/images/order/16__King_Queen_Duvet.png",
    title: "King/Queen Duvet",
    paragraph: "(Wash/Dry Clean) Synthetic",
    oldprice: 0,
    newprice: 23.50,
  },
  {
    id: 40,
    sort: "home",
    icon: "/images/order/17__Feather_Duvet.png",
    title: "Feather Single Duvet",
    paragraph: "( Wash/ Dry Clean)  Can take upto 72 Hours",
    oldprice: 0,
    newprice: 18.00,
  },
  {
    id: 41,
    sort: "home",
    icon: "/images/order/17__Feather_Duvet1.png",
    title: "Feather Duvet Double/King",
    paragraph: "(Wash/Dry Clean | From) Can take upto 72 Hours",
    oldprice: 0,
    newprice: 26.96,
  },
  {
    id: 42,
    sort: "home",
    icon: "/images/order/18__Mattress_Protector.png",
    title: "Mattress Protector Thin",
    paragraph: "(Wash & Dry Clean)",
    oldprice: 0,
    newprice: 14.00,
  },
  {
    id: 43,
    sort: "home",
    icon: "/images/order/RTDMbQvQ.png",
    title: "Blanket Single",
    paragraph: "(Wash & Dry Clean)",
    oldprice: 0,
    newprice: 16.00,
  },
  {
    id: 44,
    sort: "home",
    icon: "/images/order/17__Feather_Duvet2.png",
    title: "Mattress Protect Double Laye",
    paragraph: "Wash / Dry Clean",
    oldprice: 0,
    newprice: 35.00,
  },
  {
    id: 45,
    sort: "home",
    icon: "/images/order/Blanket.png",
    title: "Blanket Double / Large",
    paragraph: "(Wash / Dry Clean)",
    oldprice: 0,
    newprice: 17.50,
  },
  {
    id: 46,
    sort: "home",
    icon: "/images/order/17__Feather_Duvet3.png",
    title: "Bed Spread Any Size",
    paragraph: "Wash / Dry Clean",
    oldprice: 0,
    newprice: 17.00,
  },
  {
    id: 47,
    sort: "home",
    icon: "/images/order/21__Heavy_Curtain.png",
    title: "Heavy Curtains Per Kg",
    paragraph: "(DryClean / Wash | Per Kg)",
    oldprice: 0,
    newprice: 9.99,
  },
  {
    id: 48,
    sort: "home",
    icon: "/images/order/22__Hand_Towel.png",
    title: "Hand Towel",
    paragraph: "(Wash & Dry)",
    oldprice: 0,
    newprice: 1.99,
  },
  {
    id: 49,
    sort: "home",
    icon: "/images/order/23__Bath_Towel.png",
    title: "Bath Towel",
    paragraph: "(Wash & Dry)",
    oldprice: 0,
    newprice: 2.99,
  },
  {
    id: 50,
    sort: "home",
    icon: "/images/order/24__Bath_Mat.png",
    title: "Bath Mat",
    paragraph: "(Wash & Dry)",
    oldprice: 0,
    newprice: 3.00,
  },
  {
    id: 51,
    sort: "home",
    icon: "/images/order/25__Drssing_Gown.png",
    title: "Dressing Gown",
    paragraph: "(Wash & Dry)",
    oldprice: 0,
    newprice: 8.99,
  },
  {
    id: 52,
    sort: "home",
    icon: "/images/order/26__Tea_Towel.png",
    title: "Tea Towel",
    paragraph: "(Wash & Dry)",
    oldprice: 0,
    newprice: 1.50,
  },
  {
    id: 53,
    sort: "home",
    icon: "/images/order/27__2m_Table_Cloth.png",
    title: "Table Cloth Any Size",
    paragraph: "(Wash, Dry & Iron)",
    oldprice: 0,
    newprice: 13.00,
  },
  {
    id: 54,
    sort: "shirts",
    icon: "/images/order/1__5_Shirts_on_Hanger_(1).png",
    title: "5 Shirts On Hanger",
    paragraph: "Wash & Iron (Hung) Excluding Ladies Shirts / Blouses",
    oldprice: 15.00,
    newprice: 14.75,
  },
  {
    id: 55,
    sort: "shirts",
    icon: "/images/order/3__5_Shirts,_Wash_Fold.png",
    title: "5 Shirts Wash & Fold",
    paragraph: "Wash & Iron (Fold)",
    oldprice: 17.50,
    newprice: 17.24,
  },
  {
    id: 56,
    sort: "shirts",
    icon: "/images/order/5__Hung_Shirt.png",
    title: "Hung Shirt",
    paragraph: "Wash & Iron (Fold)",
    oldprice: 0,
    newprice: 3.00,
  },
  {
    id: 57,
    sort: "shirts",
    icon: "/images/order/6__Hung_T-Shirt.png",
    title: "Hung T Shirt",
    paragraph: "Wash & Iron (Hung)",
    oldprice: 0,
    newprice: 3.00,
  },
  {
    id: 58,
    sort: "shirts",
    icon: "/images/order/7__Folded_Shirt.png",
    title: "Folded Shirt",
    paragraph: "Wash & Iron",
    oldprice: 0,
    newprice: 3.50,
  },
  {
    id: 59,
    sort: "shirts",
    icon: "/images/order/3__Shirt_T-Shirt_Fold.png",
    title: "Folded T Shirt",
    paragraph: "Wash & Iron (Fold)",
    oldprice: 0,
    newprice: 3.35,
  },
  {
    id: 60,
    sort: "shirts",
    icon: "/images/order/4__3_Blouse_1.png",
    title: "Ladies Shirt",
    paragraph: "Wash & Iron",
    oldprice: 0,
    newprice: 3.00,
  },
  {
    id: 61,
    sort: "shirts",
    icon: "/images/order/4__3_Blouse_.png",
    title: "5 Ladies Shirts",
    paragraph: "Wash & Iron",
    oldprice: 15.00,
    newprice: 14.75,
  },
  {
    id: 62,
    sort: "shirts",
    icon: "/images/order/11__Silk_Blouse.png",
    title: "Silk Blouse",
    paragraph: "(Dry Clean)",
    oldprice: 0,
    newprice: 7.00,
  },
  {
    id: 63,
    sort: "shirts",
    icon: "/images/order/20x.png",
    title: "20x Prepaid Shirt Bundle",
    paragraph: "£2.50 Per Shirt. No Other Discount Works with prepaid order. You can purchase prepaid items at discounted prices. These can be used for your current and future orders. Any unused items will stay in your account. Use the prepaid pack within 3 months.",
    oldprice: 56.00,
    newprice: 50.00,
  },
  {
    id: 64,
    sort: "suits",
    icon: "/images/order/1__Suit_+_5_Shirts_(1)1.png",
    title: "Suit + 5 Shirts",
    paragraph: "(Dry Clean) 2 Piece Suit + 5 Shirts (Hung)",
    oldprice: 27.25,
    newprice: 26.88,
  },
  {
    id: 65,
    sort: "suits",
    icon: "/images/order/2__2_Suits_(1).png",
    title: "2 Suits",
    paragraph: "(Dry Clean) 2 Piece Suit Only",
    oldprice: 27.50,
    newprice: 24.85,
  },
  {
    id: 66,
    sort: "suits",
    icon: "/images/order/3__2_Piece_Suit1.png",
    title: "2 Piece Suit",
    paragraph: "(Dry Clean)",
    oldprice: 0,
    newprice: 13.75,
  },
  {
    id: 67,
    sort: "suits",
    icon: "/images/order/4__3_Peice_Suit.png",
    title: "3 Piece Suit",
    paragraph: "(Dry Clean)",
    oldprice: 0,
    newprice: 18.50,
  },
  {
    id: 68,
    sort: "suits",
    icon: "/images/order/5__Dinner_Suit.png",
    title: "Dinner Suit",
    paragraph: "(Dry Clean)",
    oldprice: 0,
    newprice: 16.50,
  },
  {
    id: 69,
    sort: "suits",
    icon: "/images/order/6__Dinner_Jacket.png",
    title: "Dinner Jacket",
    paragraph: "(Dry Clean) Exl velvet, seq, silk & leather",
    oldprice: 0,
    newprice: 9.00,
  },
  {
    id: 70,
    sort: "suits",
    icon: "/images/order/7__Waist_Coate.png",
    title: "Waist Coat",
    paragraph: "(Dry Clean)",
    oldprice: 0,
    newprice: 6.50,
  },
  {
    id: 71,
    sort: "suits",
    icon: "/images/order/8__Tie.png",
    title: "Tie",
    paragraph: "(Dry Clean)",
    oldprice: 0,
    newprice: 5.75,
  },
  {
    id: 72,
    sort: "dress",
    icon: "/images/order/2__Dress.png",
    title: "2 Dresses",
    paragraph: "(Dry Clean) Exl velvet, seq, silk & leather",
    oldprice: 24.00,
    newprice: 23.74,
  },
  {
    id: 73,
    sort: "dress",
    icon: "/images/order/2__Dresss_.png",
    title: "Dress",
    paragraph: "(Dry Clean) Exl velvet, seq, silk & leather",
    oldprice: 0,
    newprice: 12.00,
  },
  {
    id: 74,
    sort: "dress",
    icon: "/images/order/3__Dress_with_Trim_.png",
    title: "Delicate Dress",
    paragraph: "(Dry Clean)",
    oldprice: 0,
    newprice: 15.00,
  },
  {
    id: 75,
    sort: "dress",
    icon: "/images/order/4__Silk_Dress.png",
    title: "Silk Dress",
    paragraph: "(Dry Clean)",
    oldprice: 0,
    newprice: 15.50,
  },
  {
    id: 76,
    sort: "dress",
    icon: "/images/order/5__Skirt.png",
    title: "Skirt",
    paragraph: "(Dry Clean | From)",
    oldprice: 0,
    newprice: 7.35,
  },
  {
    id: 77,
    sort: "dress",
    icon: "/images/order/6__Pleated_Skirt.png",
    title: "Pleated Skirt",
    paragraph: "(Dry Clean | From)",
    oldprice: 0,
    newprice: 9.00,
  },
  {
    id: 78,
    sort: "dress",
    icon: "/images/order/7__Silk_Skirt_.png",
    title: "Silk Skirt",
    paragraph: "(Dry Clean)",
    oldprice: 0,
    newprice: 8.50,
  },
  {
    id: 79,
    sort: "dress",
    icon: "/images/order/8__Skirt_with_Trim.png",
    title: "Skirt With Trim",
    paragraph: "(Dry Clean)",
    oldprice: 0,
    newprice: 9.00,
  },
  {
    id: 80,
    sort: "dress",
    icon: "/images/order/9__Evening_Dress1.png",
    title: "Evening Dress From",
    paragraph: "(Dry Clean)",
    oldprice: 0,
    newprice: 21.50,
  },
  {
    id: 81,
    sort: "trousers",
    icon: "/images/order/1__3_Trousers_(1).png",
    title: "3 Trouser",
    paragraph: "(Dry Clean)",
    oldprice: 20.25,
    newprice: 19.98,
  },
  {
    id: 82,
    sort: "trousers",
    icon: "/images/order/2__Trouser_(1).png",
    title: "Trousers",
    paragraph: "(Dry Clean)",
    oldprice: 0,
    newprice: 7.50,
  },
  {
    id: 83,
    sort: "trousers",
    icon: "/images/order/3__Jeans.png",
    title: "Jeans",
    paragraph: "(Dry Clean)",
    oldprice: 0,
    newprice: 6.00,
  },
  {
    id: 84,
    sort: "trousers",
    icon: "/images/order/4__Silk_Trouser.png",
    title: "Silk Trouser",
    paragraph: "(Dry Clean)",
    oldprice: 0,
    newprice: 8.50,
  },
  {
    id: 85,
    sort: "trousers",
    icon: "/images/order/5__Shorts.png",
    title: "Shorts",
    paragraph: "(Dry Clean)",
    oldprice: 0,
    newprice: 4.75,
  },
  {
    id: 86,
    sort: "outdoor",
    icon: "/images/order/1__Fleece_.png",
    title: "Fleece",
    paragraph: "(Dry Clean)",
    oldprice: 0,
    newprice: 6.00,
  },
  {
    id: 87,
    sort: "outdoor",
    icon: "/images/order/2__Blazer.png",
    title: "Blazer",
    paragraph: "(Dry Clean)",
    oldprice: 0,
    newprice: 8.90,
  },
  {
    id: 88,
    sort: "outdoor",
    icon: "/images/order/3__Jacket.png",
    title: "Jacket",
    paragraph: "(Dry Clean) Exl velvet, seq, silk & leather",
    oldprice: 0,
    newprice: 9.50,
  },
  {
    id: 89,
    sort: "outdoor",
    icon: "/images/order/4__Jacket_with_Trim.png",
    title: "Jacket With Trim",
    paragraph: "(Dry Clean) Exl velvet, seq, silk & leather",
    oldprice: 0,
    newprice: 10.00,
  },
  {
    id: 90,
    sort: "outdoor",
    icon: "/images/order/5__Overcoat.png",
    title: "Overcoat",
    paragraph: "(Dry Clean)",
    oldprice: 0,
    newprice: 15.75,
  },
  {
    id: 91,
    sort: "outdoor",
    icon: "/images/order/6__Puffer_Jacket.png",
    title: "Puffa Jacket From",
    paragraph: "(Dry Clean/Wash)   Excluding Canada Goose",
    oldprice: 0,
    newprice: 24.00,
  },
  {
    id: 92,
    sort: "outdoor",
    icon: "/images/order/7__Scarf.png",
    title: "Scarf",
    paragraph: "(Dry Clean)",
    oldprice: 0,
    newprice: 5.45,
  },
  {
    id: 93,
    sort: "outdoor",
    icon: "/images/order/8__Handkerchief.png",
    title: "Handkerchief",
    paragraph: "(Dry Clean)",
    oldprice: 0,
    newprice: 1.50,
  },
  {
    id: 94,
    sort: "outdoor",
    icon: "/images/order/1__Cardigan.png",
    title: "Cardigan",
    paragraph: "Wash / Dry Clean  Exl velvet, seq, silk & leather Care Label Instructions follow up",
    oldprice: 0,
    newprice: 7.00,
  },
  {
    id: 95,
    sort: "outdoor",
    icon: "/images/order/2__Light_Knitwear.png",
    title: "Cardigan",
    paragraph: "Wash / Dry Clean  Exl velvet, seq, silk & leather Care Label Instructions follow up",
    oldprice: 0,
    newprice: 7.25,
  },
  {
    id: 96,
    sort: "outdoor",
    icon: "/images/order/3__Heavy_Knitwear.png",
    title: "Heavy Knitwear",
    paragraph: "Wash / Dry Clean  Exl velvet, seq, silk & leather Care Label Instructions follow up",
    oldprice: 0,
    newprice: 9.00,
  },
  {
    id: 97,
    sort: "outdoor",
    icon: "/images/order/4__Pashmia.png",
    title: "Pashmina",
    paragraph: "Wash / Dry Clean  Exl velvet, seq, silk & leather Care Label Instructions follow up",
    oldprice: 0,
    newprice: 8.00,
  },
  {
    id: 98,
    sort: "outdoor",
    icon: "/images/order/5__Jumpers.png",
    title: "Jumpers",
    paragraph: "Wash / Dry Clean  Exl velvet, seq, silk & leather Care Label Instructions follow up",
    oldprice: 0,
    newprice: 7.50,
  },
  {
    id: 99,
    sort: "alterations",
    icon: "/images/order/1__Trouser_Length.png",
    title: "Trouser Length",
    paragraph: "",
    oldprice: 0,
    newprice: 15.00,
  },
  {
    id: 100,
    sort: "alterations",
    icon: "/images/order/2__Trousers_with_Turn_Up.png",
    title: "Trousers With Turn Up",
    paragraph: "",
    oldprice: 0,
    newprice: 15.00,
  },
  {
    id: 101,
    sort: "alterations",
    icon: "/images/order/3__Trouser_Waist.png",
    title: "Trousers Waist",
    paragraph: "",
    oldprice: 0,
    newprice: 17.00,
  },
  {
    id: 102,
    sort: "alterations",
    icon: "/images/order/4__Skirt_Length_.png",
    title: "Skirt Length",
    paragraph: "",
    oldprice: 0,
    newprice: 17.00,
  },
  {
    id: 103,
    sort: "alterations",
    icon: "/images/order/5__Dress_Length_.png",
    title: "Dress Length",
    paragraph: "(From)",
    oldprice: 0,
    newprice: 18.00,
  },
  {
    id: 104,
    sort: "alterations",
    icon: "/images/order/6__Trousers_Zips_.png",
    title: "Trousers Zips",
    paragraph: "(From)",
    oldprice: 0,
    newprice: 15.00,
  },
  {
    id: 105,
    sort: "alterations",
    icon: "/images/order/7__Invisible_Zips_.png",
    title: "Invisible Zips",
    paragraph: "(From)",
    oldprice: 0,
    newprice: 16.50,
  },
  {
    id: 106,
    sort: "alterations",
    icon: "/images/order/8__Jack_Zips.png",
    title: "Jacket Zips",
    paragraph: "(From)",
    oldprice: 0,
    newprice: 30.00,
  },
  {
    id: 107,
    sort: "alterations",
    icon: "/images/order/9__Repair_Pocket.png",
    title: "Repair Pocket",
    paragraph: "(From)",
    oldprice: 0,
    newprice: 10.00,
  },
  {
    id: 108,
    sort: "alterations",
    icon: "/images/order/10__Patching.png",
    title: "Patching",
    paragraph: "(From)",
    oldprice: 0,
    newprice: 13.50,
  },
  {
    id: 109,
    sort: "alterations",
    icon: "/images/order/11__Sew_on_Button_.png",
    title: "Sew On Button",
    paragraph: "",
    oldprice: 0,
    newprice: 3.50,
  },
  {
    id: 110,
    sort: "alterations",
    icon: "/images/order/12__Seams_.png",
    title: "Seams",
    paragraph: "(From)",
    oldprice: 0,
    newprice: 10.00,
  },
  {
    id: 111,
    sort: "shoe",
    icon: "/images/order/1__Stiletto_Heel.png",
    title: "Ladies- Heel Tips",
    paragraph: "Price may vary",
    oldprice: 0,
    newprice: 11.95,
  },
  {
    id: 112,
    sort: "shoe",
    icon: "/images/order/2__Womens_Half_Soles.png",
    title: "Ladies Rubber Half Sole",
    paragraph: "",
    oldprice: 0,
    newprice: 26.00,
  },
  {
    id: 113,
    sort: "shoe",
    icon: "/images/order/7__Womens_Shoe.png",
    title: "Women's Shoe Stitch Glue",
    paragraph: "Stitch/glue",
    oldprice: 0,
    newprice: 18.00,
  },
  {
    id: 114,
    sort: "shoe",
    icon: "/images/order/8__New_Insoles.png",
    title: "New insoles",
    paragraph: "",
    oldprice: 0,
    newprice: 12.00,
  },
  {
    id: 115,
    sort: "shoe",
    icon: "/images/order/9__Womens_Shoe_Cleaning.png",
    title: "Ladies shoe cleaning",
    paragraph: "Clean / Polish / Protect",
    oldprice: 0,
    newprice: 11.00,
  },
  {
    id: 116,
    sort: "shoe",
    icon: "/images/order/10__Ankle_Boot_Cleaning.png",
    title: "Ankle Boots Cleaning",
    paragraph: "Clean, Polish, Repair",
    oldprice: 0,
    newprice: 25.00,
  },
  {
    id: 117,
    sort: "shoe",
    icon: "/images/order/11__Womens_Leather_Shoe_Clean.png",
    title: "Women's Leather Shoe Clean",
    paragraph: "",
    oldprice: 0,
    newprice: 22.00,
  },
  {
    id: 118,
    sort: "shoe",
    icon: "/images/order/12__Womens_Shoe_Zip_Change.png",
    title: "Women's Shoe Zip Change",
    paragraph: "(From)",
    oldprice: 0,
    newprice: 45.00,
  },
  {
    id: 119,
    sort: "shoe",
    icon: "/images/order/13__Mens_Heal.png",
    title: "Mens Rubber Heels",
    paragraph: "(From)",
    oldprice: 0,
    newprice: 20.00,
  },
  {
    id: 120,
    sort: "shoe",
    icon: "/images/order/14__Mens_Half_Soles.png",
    title: "Men's Half Soles",
    paragraph: "",
    oldprice: 0,
    newprice: 28.00,
  },
  {
    id: 121,
    sort: "shoe",
    icon: "/images/order/15__Mens_Leather_Soles_Heel.png",
    title: "Men's leather H Sole & Heel",
    paragraph: "",
    oldprice: 0,
    newprice: 64.00,
  },
  {
    id: 122,
    sort: "shoe",
    icon: "/images/order/16__Mens_1_4_Rubber_Heel.png",
    title: "Men's 1/4 rubber heel",
    paragraph: "",
    oldprice: 0,
    newprice: 20.00,
  },
  {
    id: 123,
    sort: "shoe",
    icon: "/images/order/17__Mens_1_4_Steel_Heel.png",
    title: "Men's 1/4 steel heel",
    paragraph: "",
    oldprice: 0,
    newprice: 20.00,
  },
  {
    id: 124,
    sort: "shoe",
    icon: "/images/order/18__Mens_Rubber_Soles.png",
    title: "Men Rubber Half sole",
    paragraph: "",
    oldprice: 0,
    newprice: 30.00,
  },
  {
    id: 125,
    sort: "shoe",
    icon: "/images/order/19__Mens_Shooes_Leather_Rubber.png",
    title: "Men's Toes leather/ rubber",
    paragraph: "",
    oldprice: 0,
    newprice: 15.00,
  },
  {
    id: 126,
    sort: "shoe",
    icon: "/images/order/20__Mens_Repairs_of_Inside.png",
    title: "Men's repairs of inside",
    paragraph: "",
    oldprice: 0,
    newprice: 30.00,
  },
  {
    id: 127,
    sort: "shoe",
    icon: "/images/order/21__Mens_Shoe_Cleaning.png",
    title: "Men's shoe cleaning",
    paragraph: "",
    oldprice: 0,
    newprice: 14.00,
  },
  {
    id: 128,
    sort: "shoe",
    icon: "/images/order/22__Mens_Boot_Cleaning.png",
    title: "Men Boots Cleaning",
    paragraph: "",
    oldprice: 0,
    newprice: 15.00,
  },
  {
    id: 129,
    sort: "shoe",
    icon: "/images/order/23__Means_Leather_Shoe_Cleaning.png",
    title: "Men Leather Shoe Clean",
    paragraph: "",
    oldprice: 0,
    newprice: 20.00,
  },
  {
    id: 130,
    sort: "shoe",
    icon: "/images/order/24__Men_Shoe_Zip.png",
    title: "Men Shoe Zip",
    paragraph: "(price may vary)",
    oldprice: 0,
    newprice: 20.00,
  },
];
export default ItemData;
