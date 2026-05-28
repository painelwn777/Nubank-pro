// ===== SERVICE WORKER =====

self.addEventListener('install', function(event){

  console.log('SW instalado');

  self.skipWaiting();

});



self.addEventListener('activate', function(event){

  console.log('SW ativado');

});



self.addEventListener('notificationclick', function(event){

  event.notification.close();

  event.waitUntil(

    clients.openWindow('./')

  );

});



self.addEventListener('push', function(e){

  var data = {};

  try{

    data = e.data.json();

  } catch(ex){

    data = {

      title: 'Nubank',

      body: e.data ? e.data.text() : 'Nova notificação'

    };

  }

  e.waitUntil(

    self.registration.showNotification(

      data.title || 'Nubank',

      {

        body: data.body || '',

        icon: './icon-192.png',

        badge: './icon-192.png',

        vibrate: [200,100,200],

        tag: data.tag || 'nubank',

        requireInteraction: false

      }

    )

  );

});