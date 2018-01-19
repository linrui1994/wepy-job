import {isMobile as isPhone} from 'lv-util'

export function formatPhone (phone) {
  if (isPhone(phone)) {
    console.log(phone.slice(0, 3) + ' ' + phone.slice(3, 7) + ' ' + phone.slice(7, 11))
    return phone.slice(0, 3) + ' ' + phone.slice(3, 7) + ' ' + phone.slice(7, 11)
  } else {
    return phone
  }
}
