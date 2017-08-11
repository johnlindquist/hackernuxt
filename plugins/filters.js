import Vue from "vue"
import { distanceInWordsToNow } from "date-fns"

Vue.filter("timeSince", timestamp => {
  const time = Number(timestamp) * 1000
  return distanceInWordsToNow(time)
})
