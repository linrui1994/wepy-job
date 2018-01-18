export function isPhone (str) {
  return /^(13[0-9]|14[579]|15[0-3,5-9]|17[0135678]|18[0-9])([0-9]){8}$/.test(str)
}

export function formatPhone (phone) {
  console.log(phone)
  if (isPhone(phone)) {
    console.log(phone.slice(0, 3) + ' ' + phone.slice(3, 7) + ' ' + phone.slice(7, 11))
    return phone.slice(0, 3) + ' ' + phone.slice(3, 7) + ' ' + phone.slice(7, 11)
  } else {
    return phone
  }
}
