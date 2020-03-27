console.log('Platform Started');
fin.Platform.init({
    overrideCallback: async (Provider) => {
        class Override extends Provider {
            async getSnapshot() {
                const snapshot = await super.getSnapshot();
                console.log('Platform Provider Snapshot : ', snapshot);
                return {
                    ...snapshot
                };
            }

            async applySnapshot({ snapshot, options }) {
              console.log('Platform Provider Applying Snapshot: ', snapshot, ' Options : ', options);
              return super.applySnapshot({ snapshot, options });
            }
        }
        return new Override();
    }
});
