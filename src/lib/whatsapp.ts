import { getWhatsAppLink } from './utils';
import {
  WHATSAPP_MSG_GET_IN_TOUCH,
  WHATSAPP_MSG_CHAT_SUPPORT,
  formatWhatsAppPackageBookingMsg,
  formatWhatsAppCalculatorBookingMsg,
  formatWhatsAppHotelDirectionsMsg,
} from '@/data/whatsapp';
import type {
  PackageBookingDetails,
  CalculatorBookingDetails,
  HotelDirectionsDetails,
} from '@/types';

export function getWhatsAppGetInTouchLink() {
  return getWhatsAppLink(WHATSAPP_MSG_GET_IN_TOUCH);
}

export function getWhatsAppChatSupportLink() {
  return getWhatsAppLink(WHATSAPP_MSG_CHAT_SUPPORT);
}

export function getWhatsAppPackageBookingLink(details: PackageBookingDetails) {
  return getWhatsAppLink(formatWhatsAppPackageBookingMsg(details));
}

export function getWhatsAppCalculatorBookingLink(details: CalculatorBookingDetails) {
  return getWhatsAppLink(formatWhatsAppCalculatorBookingMsg(details));
}

export function getWhatsAppHotelDirectionsLink(details: HotelDirectionsDetails) {
  return getWhatsAppLink(formatWhatsAppHotelDirectionsMsg(details));
}
