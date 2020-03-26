
fin.Platform.init({
    overrideCallback: async (Provider) => {
        class Override extends Provider {
            async getSnapshot() {
                const snapshot = await super.getSnapshot();
                console.log('Snapshot : ', snapshot);
                return {
                    ...snapshot
                };
            }

            async applySnapshot({ snapshot, options }) {

              return super.applySnapshot({ snapshot, options });
            }
        }
        return new Override();
    }
});
