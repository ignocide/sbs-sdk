
  module.exports = {
    broadcast: {
      channel: {
        list: '/broadcast/channel/list.json',
        read: '/broadcast/channel/read.json',
        search: '/broadcast/channel/search_list.json'
      },
      program: {
        list: '/broadcast/program/list.json',
        read: '/broadcast/program/read.json',
        search: '/broadcast/program/search_list.json'
      },
      episode: {
        list: '/broadcast/episode/list.json',
        read: '/broadcast/episode/read.json',
        search: '/search/episode/search_list.json'
      }
    },
    curation: {
      curation: {
        list: '/curation/curation/list.json',
        read: '/curation/curation/read.json',
        search: '/curation/curation/search_list.json'
      },
      playlist: {
        list: '/curation/playlist/list.json',
        read: '/curation/playlist/read.json',
        search: '/curation/playlist/search_list.json'
      },
      category: {
        list: '/curation/category/list.json'
      },
      episode: {
        search: '/curation/episode/search_list.json'
      }
    },
    search: {
      senmeta: '/search/senmeta/search_list.jsp',
      socialmeta: '/search/socialmeata/search_list.jsp',
      curation: '/search/curation/search_list.jsp'
    },
    contents: {
      contents: {
        list: '/contents/contents/list.json',
        read: '/contents/contents/read.json',
        search: '/contents/contents/search_list.json'
      },
      senmeta: {
        list: '/contents/senmeta/list.json',
        read: '/contents/senmeta/read.json'
      },
      servicemeta: {
        curationList: '/servicemeta/curation_list.json',
        contentsList: '/contents/servicemeta/conts_list.json'
      },
      online_mng: {
        list: '/contents/online_mng/list.json'
      }
    },
    cms: {
      senmeta: {
        creaet: '/cms/senmeta/create.json',
        update: '/cms/senmeta/update.json',
        delete: '/cms/senmeta/delete.json'
      },
      socialmeta: {
        create: '/cms/socialmeta/create.json',
        update: '/cms/socialmeta/update.json',
        delete: '/cms/socialmeta/delete.json'
      },
      curation: {
        create: '/cms/curation/create.json',
        update: '/cms/curation/update.json',
        delete: '/cms/curation/delete.json'
      }
    }
  }
