module.exports = {
  name: 'app-launcher',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/app-launcher',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
