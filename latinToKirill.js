function latinToKirill(inputText) {
  let outText = "";

  for (i = 0; i < inputText.length; i++) {
    //Harflarni donalab o'giradi
    switch (inputText[i]) {
      case "a":
        outText += "а";
        break;
      case "b":
        outText += "б";
        break;
      case "d":
        outText += "д";
        break;
      case "e":
        outText += "э";
        break;
      case "f":
        outText += "ф";
        break;
      case "i":
        outText += "и";
        break;
      case "j":
        outText += "ж";
        break;
      case "k":
        outText += "к";
        break;
      case "l":
        outText += "л";
        break;
      case "m":
        outText += "м";
        break;
      case "n":
        outText += "н";
        break;
      case "p":
        outText += "п";
        break;
      case "r":
        outText += "р";
        break;
      case "t":
        outText += "т";
        break;
      case "u":
        outText += "у";
        break;
      case "v":
        outText += "в";
        break;
      case "x":
        outText += "х";
        break;
      case "y":
        outText += "й";
        break;
      case "z":
        outText += "з";
        break;
      case "A":
        outText += "А";
        break;
      case "B":
        outText += "Б";
        break;
      case "D":
        outText += "Д";
        break;
      case "E":
        outText += "Э";
        break;
      case "F":
        outText += "Ф";
        break;
      case "I":
        outText += "И";
        break;
      case "J":
        outText += "Ж";
        break;
      case "K":
        outText += "К";
        break;
      case "L":
        outText += "Л";
        break;
      case "M":
        outText += "М";
        break;
      case "N":
        outText += "Н";
        break;
      case "P":
        outText += "П";
        break;
      case "R":
        outText += "Р";
        break;
      case "T":
        outText += "Т";
        break;
      case "U":
        outText += "У";
        break;
      case "V":
        outText += "В";
        break;
      case "X":
        outText += "Х";
        break;
      case "Y":
        outText += "Й";
        break;
      case "Z":
        outText += "З";
        break;
      case "Q":
        outText += "Қ";
        break;
      case "q":
        outText += "қ";
        break;
      default:
        outText += inputText[i]; // ro'yxatda ko'rsatilganmagan harf mavjud bo'lsa to'g'ridan to'g'ri o'tkazadi
    }
  }
  outText = outText.replace(/o'/g, "ў"); //tarjima qilinmagan harflarni kirilchaga o'tkazadi
  outText = outText.replace(/O'/g, "Ў");
  outText = outText.replace(/sh/g, "ш");
  outText = outText.replace(/Sh/g, "Ш");
  outText = outText.replace(/ch/g, "ч");
  outText = outText.replace(/Ch/g, "Ч");
  outText = outText.replace(/g/g, "г");
  outText = outText.replace(/G/g, "Г");
  outText = outText.replace(/g'/g, "ғ");
  outText = outText.replace(/G'/g, "Ғ");

  outText = outText.replace(/s/g, "с");
  outText = outText.replace(/S/g, "С");
  outText = outText.replace(/c/g, "с");
  outText = outText.replace(/C/g, "С");
  outText = outText.replace(/H/g, "Ҳ");
  outText = outText.replace(/h/g, "ҳ");
  outText = outText.replace(/йа/g, "я");
  outText = outText.replace(/ЙА/g, "Я");
  outText = outText.replace(/Йа/g, "Я");
  outText = outText.replace(/йэ/g, "е");
  outText = outText.replace(/ЙЭ/g, "Е");
  outText = outText.replace(/Йэ/g, "Е");
  outText = outText.replace(/Йу/g, "Ю");
  outText = outText.replace(/йу/g, "ю");
  outText = outText.replace(/ЙУ/g, "Ю");
  outText = outText.replace(/йо/g, "ё");
  outText = outText.replace(/ЙО/g, "Ё");
  outText = outText.replace(/Йо/g, "Ё");
  outText = outText.replace(/тс/g, "ц");
  outText = outText.replace(/ТС/g, "Ц");
  outText = outText.replace(/Тс/g, "Ц");
  outText = outText.replace(/`/g, "ъ");

  return outText; //to'liq tarjima qilingan tekst ekranga chiqariladi
}
function kirillToLatin(inputText) {
  let outText = "";
  let outTextFiltering = "";
  for (i = 0; i < inputText.length; i++) {
    //Harflarni donalab o'giradi
    switch (inputText[i]) {
      case "а":
        outText += "a";
        break;
      case "б":
        outText += "b";
        break;
      case "д":
        outText += "d";
        break;
      case "э":
        outText += "e";
        break;
      case "ф":
        outText += "f";
        break;
      case "и":
        outText += "i";
        break;
      case "ж":
        outText += "j";
        break;
      case "к":
        outText += "k";
        break;
      case "л":
        outText += "l";
        break;
      case "м":
        outText += "m";
        break;
      case "н":
        outText += "n";
        break;
      case "п":
        outText += "p";
        break;
      case "р":
        outText += "r";
        break;
      case "с":
        outText += "s";
        break;
      case "у":
        outText += "u";
        break;
      case "в":
        outText += "v";
        break;
      case "х":
        outText += "x";
        break;
      case "й":
        outText += "y";
        break;
      case "з":
        outText += "z";
        break;
      case "А":
        outText += "A";
        break;
      case "Б":
        outText += "B";
        break;
      case "Д":
        outText += "D";
        break;
      case "Э":
        outText += "E";
        break;
      case "Ф":
        outText += "F";
        break;
      case "И":
        outText += "I";
        break;
      case "Ж":
        outText += "J";
        break;
      case "К":
        outText += "K";
        break;
      case "Л":
        outText += "L";
        break;
      case "М":
        outText += "M";
        break;
      case "Н":
        outText += "N";
        break;
      case "Р":
        outText += "R";
        break;
      case "П":
        outText += "P";
        break;
      case "Т":
        outText += "T";
        break;
      case "У":
        outText += "U";
        break;
      case "В":
        outText += "V";
        break;
      case "Х":
        outText += "X";
        break;
      case "Й":
        outText += "Y";
        break;
      case "З":
        outText += "Z";
        break;
      case "Қ":
        outText += "Q";
        break;
      case "қ":
        outText += "q";
        break;
      default:
        outText += inputText[i]; // ro'yxatda ko'rsatilganmagan harf mavjud bo'lsa to'g'ridan to'g'ri o'tkazadi
    }
  }

  outText = outText.replace(/ў/g, "o'");
  outText = outText.replace(/ў/g, "O'");
  outText = outText.replace(/ш/g, "sh");
  outText = outText.replace(/Ш/g, "Sh");
  outText = outText.replace(/ч/g, "ch");
  outText = outText.replace(/Ч/g, "Ch");
  outText = outText.replace(/ғ/g, "g'");
  outText = outText.replace(/Ғ/g, "G'");
  outText = outText.replace(/с/g, "c");
  outText = outText.replace(/С/g, "C");
  outText = outText.replace(/Ҳ/g, "H");
  outText = outText.replace(/ҳ/g, "h");
  outText = outText.replace(/я/g, "ya");
  outText = outText.replace(/Я/g, "Ya");
  outText = outText.replace(/е/g, "ye");
  outText = outText.replace(/Е/g, "Ye");
  outText = outText.replace(/Ю/g, "Yu");
  outText = outText.replace(/ю/g, "yu");
  outText = outText.replace(/ё/g, "yo");
  outText = outText.replace(/Ё/g, "Yo");
  outText = outText.replace(/ц/g, "ts");
  outText = outText.replace(/Ц/g, "Ts");
  outText = outText.replace(/ъ/g, "`");
  outText = outText.replace(/Ъ/g, "`");
  outText = outText.replace(/г/g, "g");
  outText = outText.replace(/Г/g, "G");
  outText = outText.replace(/С/g, "S");
  return outText;

  //to'liq tarjima qilingan tekst ekranga chiqariladi
}
