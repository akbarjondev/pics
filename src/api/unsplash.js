import axios from "axios";

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID Ary5Yn_66tSGE_kxxN4WW1ZBhkg97WPjrMrchUEMGE4'
  }
})