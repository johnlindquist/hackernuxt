import axios from "~/plugins/axios"

export const state = () => ({
  ids: [],
  items: []
})

export const mutations = {
  setIds(state, ids) {
    state.ids = ids
  },

  setItems(state, items) {
    state.items = items
  }
}

export const actions = {
  async nuxtServerInit({ commit }) {
    const response = await axios.get("topstories.json")
    const ids = response.data
    const tenIds = ids.slice(0, 10)

    const itemsPromises = tenIds.map(id => axios.get(`item/${id}.json`))
    const itemsResponses = await Promise.all(itemsPromises)
    const items = itemsResponses.map(res => res.data)

    // commit("setIds", ids)
    commit("setItems", items)
  }
}
