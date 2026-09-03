const companies = [
  {
    id: 'nh-spac-34', name: 'NH스팩34호', type: '스팩', subscription: ['2026-09-01', '2026-09-02'], listing: '2026-09-10',
    price: '2,000원', priceBand: '2,000원', broker: 'NH투자증권', refund: '2026.09.04',
    summary: '기업 인수·합병을 목적으로 설립된 기업인수목적회사(SPAC)입니다.',
    demand: { status: 'done', text: '기관 경쟁률 1,160.7 : 1 · 확정 공모가 2,000원' },
    sources: [
      ['38커뮤니케이션 공모 일정', 'https://www.38.co.kr/html/fund/?no=2312&o=v'],
      ['기관 수요예측 참고 기사', 'https://www.wikitree.co.kr/articles/1156721']
    ]
  },
  {
    id: 'neosapiens', name: '네오사피엔스', type: '일반', subscription: ['2026-09-10', '2026-09-11'], listing: null,
    price: '미정', priceBand: '13,800~15,800원', broker: '대신증권', refund: '2026.09.15',
    summary: '생성형 AI 음성 솔루션 플랫폼 타입캐스트를 운영하는 AI 미디어 기술 기업입니다.',
    demand: { status: 'pending', text: '기관 수요예측 진행 중 · 결과 발표 전' },
    sources: [['9월 공모 일정', 'https://www.38.co.kr/html/fund/?o=k'], ['기업·일정 소개', 'https://www.kokstock.com/stock/ipo.asp']]
  },
  {
    id: 'korea-spac-17', name: '한국스팩17호', type: '스팩', subscription: ['2026-09-10', '2026-09-11'], listing: null,
    price: '미정', priceBand: '2,000원', broker: '한국투자증권', refund: '2026.09.15',
    summary: '기업 인수·합병을 목적으로 설립된 기업인수목적회사(SPAC)입니다.',
    demand: { status: 'pending', text: '기관 수요예측 결과 발표 전' },
    sources: [['9월 공모 일정', 'https://www.38.co.kr/html/fund/?o=k']]
  },
  {
    id: 'kb-spac-34', name: 'KB스팩34호', type: '스팩', subscription: ['2026-09-10', '2026-09-11'], listing: null,
    price: '미정', priceBand: '2,000원', broker: 'KB증권', refund: '2026.09.15',
    summary: '기업 인수·합병을 목적으로 설립된 기업인수목적회사(SPAC)입니다.',
    demand: { status: 'pending', text: '기관 수요예측 예정(9.04~9.07) · 결과 발표 전' },
    sources: [['KB스팩34호 상세 일정', 'https://www.38.co.kr/html/fund/?no=2313&o=v']]
  },
  {
    id: 'wiseplanet', name: '와이즈플래닛컴퍼니', type: '일반', subscription: ['2026-09-14', '2026-09-15'], listing: null,
    price: '미정', priceBand: '10,000~12,000원', broker: '대신증권', refund: '2026.09.17',
    offering: '1,600,000주 · 신주모집 100%',
    summary: '상품과 브랜드를 직접 기획하고 마케팅·유통·고객관리까지 수행하는 브랜드 빌더입니다.',
    demand: { status: 'pending', text: '기관 수요예측 예정(9.04~9.10) · 결과 발표 전' },
    sources: [
      ['DART 정정 증권신고서', 'https://dart.fss.or.kr/'],
      ['최신 공모 일정·공모구조', 'https://www.38.co.kr/html/fund/?no=2311&o=v']
    ]
  },
  {
    id: 'bigwave-robotics', name: '빅웨이브로보틱스', type: '일반', subscription: ['2026-09-15', '2026-09-16'], listing: null,
    price: '미정', priceBand: '20,000~24,000원', broker: '유진투자증권 · 미래에셋증권', refund: '미정',
    summary: '로봇 자동화 플랫폼 마로솔과 AI 오케스트레이션 플랫폼 솔링크를 운영하는 피지컬 AI 기업입니다.',
    demand: { status: 'pending', text: '기관 수요예측 결과 발표 전' },
    sources: [['9월 공모 일정', 'https://www.38.co.kr/html/fund/?o=k'], ['기업 소개', 'https://www.kokstock.com/stock/ipo.asp']]
  },
  {
    id: 'deoksan-nepcores', name: '덕산넵코어스', type: '일반', subscription: ['2026-09-16', '2026-09-17'], listing: null,
    price: '미정', priceBand: '12,400~14,600원', broker: '대신증권', refund: '미정',
    summary: '설계부터 생산·시험까지 제공하는 특수 목적용 항재밍 토탈 솔루션 기업입니다.',
    demand: { status: 'pending', text: '기관 수요예측 결과 발표 전' },
    sources: [['9월 공모 일정', 'https://www.38.co.kr/html/fund/?o=k'], ['기업 소개', 'https://www.kokstock.com/stock/ipo.asp']]
  },
  {
    id: 'global-technology', name: '글로벌테크놀로지', type: '일반', subscription: ['2026-09-16', '2026-09-17'], listing: null,
    price: '미정', priceBand: '13,000~15,000원', broker: '한국투자증권', refund: '미정',
    summary: 'LED 구동반도체를 주력으로 개발하는 시스템 반도체 팹리스 기업입니다.',
    demand: { status: 'pending', text: '기관 수요예측 결과 발표 전' },
    sources: [['9월 공모 일정', 'https://www.38.co.kr/html/fund/?o=k'], ['기업 소개', 'https://www.kokstock.com/stock/ipo.asp']]
  },
  {
    id: 'brils', name: '브릴스', type: '일반', subscription: ['2026-09-17', '2026-09-18'], listing: null,
    price: '미정', priceBand: '16,500~19,500원', broker: 'IBK투자증권', refund: '미정',
    summary: '설계·소프트웨어·생산·설치·사후관리 전 과정을 제공하는 로봇 모듈화 플랫폼 기업입니다.',
    demand: { status: 'pending', text: '기관 수요예측 결과 발표 전' },
    sources: [['9월 공모 일정', 'https://www.38.co.kr/html/fund/?o=k'], ['기업 소개', 'https://www.kokstock.com/stock/ipo.asp']]
  },
  {
    id: 'elice', name: '엘리스그룹', type: '일반', subscription: ['2026-09-18', '2026-09-21'], listing: null,
    price: '미정', priceBand: '70,400~90,500원', broker: '미래에셋증권 · 삼성증권', refund: '미정',
    summary: 'AI 교육 플랫폼과 클라우드 인프라, 산업별 AX 솔루션을 제공하는 풀스택 AI 기업입니다.',
    demand: { status: 'pending', text: '기관 수요예측 결과 발표 전' },
    sources: [['9월 공모 일정', 'https://www.38.co.kr/html/fund/?o=k'], ['기업 소개', 'https://www.kokstock.com/stock/ipo.asp']]
  },
  {
    id: 'skylabs', name: '스카이랩스', type: '상장', subscription: [], listing: '2026-09-04',
    price: '10,000원', priceBand: '13,000~16,000원', broker: '한국투자증권', refund: '2026.08.31',
    summary: '반지형 혈압 모니터링 기기와 생체신호 데이터 플랫폼을 개발하는 디지털 헬스케어 기업입니다.',
    demand: { status: 'done', text: '확정 공모가 10,000원 · 희망 밴드 하단 미만' },
    sources: [['상장·확정 공모가 일정', 'https://www.38.co.kr/html/board/?code=380060&no=3431&o=v']]
  }
];

const calendarEl = document.querySelector('#calendar');
const listEl = document.querySelector('#company-list');
const drawer = document.querySelector('#detail-drawer');
const backdrop = document.querySelector('#drawer-backdrop');
const drawerContent = document.querySelector('#drawer-content');
const closeButton = document.querySelector('#drawer-close');
let lastFocusedElement = null;

function shortName(name) {
  return name.replace('컴퍼니', '').replace('글로벌테크놀로지', '글로벌테크').replace('빅웨이브로보틱스', '빅웨이브');
}

function renderCalendar() {
  const firstDay = new Date(2026, 8, 1).getDay();
  const totalDays = 30;
  const cells = [];

  for (let i = 0; i < firstDay; i += 1) cells.push('<div class="calendar-day empty" aria-hidden="true"></div>');

  for (let day = 1; day <= totalDays; day += 1) {
    const date = `2026-09-${String(day).padStart(2, '0')}`;
    const events = [];
    companies.forEach(company => {
      if (company.subscription.includes(date)) events.push({ company, kind: 'subscription', label: `청약 · ${shortName(company.name)}` });
      if (company.listing === date) events.push({ company, kind: 'listing', label: `상장 · ${shortName(company.name)}` });
    });
    cells.push(`
      <div class="calendar-day">
        <span class="date-number">${day}</span>
        ${events.map(({ company, kind, label }) => `<button class="calendar-event ${kind}" data-company="${company.id}">${label}</button>`).join('')}
      </div>`);
  }
  calendarEl.innerHTML = cells.join('');
}

function renderList() {
  const sorted = [...companies].sort((a, b) => {
    const aDate = a.subscription[0] || a.listing;
    const bDate = b.subscription[0] || b.listing;
    return aDate.localeCompare(bDate);
  });
  document.querySelector('#company-count').textContent = `${companies.length}개 기업`;
  listEl.innerHTML = sorted.map(company => {
    const dateText = company.subscription.length
      ? `${company.subscription[0].slice(5).replace('-', '.')}–${company.subscription.at(-1).slice(8)} 청약`
      : `${company.listing.slice(5).replace('-', '.')} 상장`;
    return `
      <button class="company-row" data-company="${company.id}">
        <span class="company-main">
          <span class="status ${company.demand.status}">${company.demand.status === 'done' ? '결과 공개' : '발표 전'}</span>
          <span class="company-name">${company.name}</span>
          <span class="company-meta">${dateText} · ${company.broker}</span>
        </span>
        <span class="company-price">${company.priceBand}</span>
        <span class="arrow">›</span>
      </button>`;
  }).join('');
}

function openDrawer(company) {
  lastFocusedElement = document.activeElement;
  const subscriptionText = company.subscription.length
    ? `${company.subscription[0].replaceAll('-', '.')} ~ ${company.subscription.at(-1).replaceAll('-', '.')}`
    : '청약 완료';
  drawerContent.innerHTML = `
    <p class="detail-kicker">${company.type === '스팩' ? 'SPAC' : 'INITIAL PUBLIC OFFERING'}</p>
    <h2 id="detail-title">${company.name}</h2>
    <p class="detail-summary">${company.summary}</p>
    <dl class="detail-grid">
      <div class="detail-item"><dt>청약일</dt><dd>${subscriptionText}</dd></div>
      <div class="detail-item"><dt>상장일</dt><dd>${company.listing ? company.listing.replaceAll('-', '.') : '미정'}</dd></div>
      <div class="detail-item"><dt>희망 공모가</dt><dd>${company.priceBand}</dd></div>
      <div class="detail-item"><dt>확정 공모가</dt><dd>${company.price}</dd></div>
      <div class="detail-item"><dt>주관사</dt><dd>${company.broker}</dd></div>
      <div class="detail-item"><dt>환불일</dt><dd>${company.refund}</dd></div>
      ${company.offering ? `<div class="detail-item"><dt>공모주식</dt><dd>${company.offering}</dd></div>` : ''}
    </dl>
    <div class="result-card ${company.demand.status}">
      <h3>기관 수요예측</h3>
      <p>${company.demand.text}</p>
    </div>
    <div class="source-links">
      <h3>확인한 자료</h3>
      ${company.sources.map(([label, url]) => `<a href="${url}" target="_blank" rel="noopener noreferrer">${label} ↗</a>`).join('')}
    </div>`;
  backdrop.hidden = false;
  drawer.classList.add('open');
  drawer.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  closeButton.focus();
}

function closeDrawer() {
  drawer.classList.remove('open');
  drawer.setAttribute('aria-hidden', 'true');
  backdrop.hidden = true;
  document.body.style.overflow = '';
  if (lastFocusedElement) lastFocusedElement.focus();
}

document.addEventListener('click', event => {
  const trigger = event.target.closest('[data-company]');
  if (!trigger) return;
  const company = companies.find(item => item.id === trigger.dataset.company);
  if (company) openDrawer(company);
});

closeButton.addEventListener('click', closeDrawer);
backdrop.addEventListener('click', closeDrawer);
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && drawer.classList.contains('open')) closeDrawer();
});

renderCalendar();
renderList();
