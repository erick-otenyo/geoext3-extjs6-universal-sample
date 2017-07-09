/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('Kiambu.Application', {
  extend: 'Ext.app.Application',

  name: 'Kiambu',
  views: [
    'login.Login'
  ],
  stores: [
    // TODO: add global / shared stores here
  ],
  // create a reference in Ext.application so we can access it from multiple functions
  splashscreen: {},

  init: function() {
    // start the mask on the body and get a reference to the mask
    splashscreen = Ext.getBody().mask('Loading , please stand by ...', 'splashscreen');
  },

  launch: function() {

    Ext.tip.QuickTipManager.init();
    var task = new Ext.util.DelayedTask(function() {

      // fade out the body mask
      splashscreen.fadeOut({
        duration: 500,
        remove: true
      });

      // fade out the message
      splashscreen.next().fadeOut({
        duration: 500,
        remove: true,
        listeners: {
          afteranimate: function(el, startTime, eOpts) {
            Ext.widget('login-dialog');
          }
        }

      });

    });

    task.delay(1000);

  },

  onAppUpdate: function() {
    Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
      function(choice) {
        if (choice === 'yes') {
          window.location.reload();
        }
      }
    );
  }
});
