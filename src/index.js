export default {
   install(Vue, config = { t: translate }) {
      Vue.mixin({
         beforeCreate() {
            const filters = this.$options.filters;
            const set = (name) => {
               if (typeof filters[name] === 'undefined') {
                  filters[name] = (...args) => {
                     return this.$i18n && this["$" + name] ? this["$" + name](args) : args[0];
                  }
                  
                  if ( name in config && filter[ config[name] ] === undefined ) {
                     filters[ config[name] ] = config[ name ]
                  }
               }
            };
            set('t');
            set('tc');
            set('te');
         },
         beforeDestroy() {
            var filters = this.$options.filters;
            delete filters.t;
            delete filters.te;
            delete filters.tc;
            for ( let key in config ) {
               delete filters[ key ]
            }
         }
      });
   }
};
