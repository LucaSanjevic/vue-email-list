let root = new Vue({
    el: '#root',
    data: {
       listaEmails: [],
    },
    methods: {
        creaEmails: function() {
        for (var i=0; i < 10; i++) {
           axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
           .then((response) => {
            this.listaEmails.push(response.data.response)
                                    });
                             }
             }
            }
        }
);