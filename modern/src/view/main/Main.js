/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Kiambu.view.main.Main', {
  extend: 'Ext.panel.Panel',
  xtype: 'app-main',
  title: 'Kiambu Map',

  requires: [
    'Ext.plugin.Viewport',
    'Ext.window.MessageBox',
  ],
  region: 'center',
  layout: 'fit',
  controller: 'main',
  viewModel: 'main',
  items: [{
    xtype: 'mappanel'
  }]
});
