let errorMess = {};

function isVietnamesePhoneNumber(number) {
  let isTrue = /([\+84|84|0]+(3|5|7|8|9|1[2|6|8|9]))+([0-9]{8})\b/g.test(
    number
  );
  if (!isTrue) {
    errorMess.message = "ko hop le";
  } else console.log("good job");
}

isVietnamesePhoneNumber("0379553968");
console.log("errormessage:", errorMess);
