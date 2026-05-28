// ===== SERVICE WORKER =====

self.addEventListener('install', function(event){

  console.log('Service Worker instalado');

  self.skipWaiting();

});



self.addEventListener('activate', function(event){

  console.log('Service Worker ativado');

});



self.addEventListener('notificationclick', function(event){

  event.notification.close();

  event.waitUntil(

    clients.openWindow('./')

  );

});



self.addEventListener('push', function(event){

  let data = {};

  try {

    data = event.data.json();

  } catch(e){

    data = {

      title: 'Nubank',

      body: 'Nova notificação'

    };

  }

  event.waitUntil(

    self.registration.showNotification(

      data.title || 'Nubank',

      {

        body: data.body || '',

        icon: './icon-192.png',

        badge: './icon-192.png',

        vibrate: [100,50,100],

        tag: 'nubank-pix',

        requireInteraction: false

      }

    )

  );

});
