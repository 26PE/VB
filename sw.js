// 홈 화면 설치용 최소 서비스 워커 (저장해 두지 않아서 항상 최신 화면이 열려요)
self.addEventListener('install',e=>self.skipWaiting());
self.addEventListener('activate',e=>self.clients.claim());
self.addEventListener('fetch',()=>{});
