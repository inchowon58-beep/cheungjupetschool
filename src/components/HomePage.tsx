import { GALLERY, SITE } from "@/lib/site";

function img(n: string) {
  return `${SITE.imageCdn}/${n}.webp`;
}

export default function HomePage() {
  const year = new Date().getFullYear();

  return (
    <>
      <a className="skip-link" href="#main">
        본문 바로가기
      </a>

      <main id="main">
        <section className="hero" aria-label="청주애견미용학원 히어로">
          <img
            className="hero-media"
            src={img("08")}
            alt="청주애견미용학원 청주펫스쿨 요일표 상담"
            width={1600}
            height={1067}
            fetchPriority="high"
          />
          <div className="hero-veil" aria-hidden="true" />
          <div className="hero-content">
            <p className="hero-brand">
              {SITE.brandEn} · {SITE.brandKo}
            </p>
            <h1>청주애견미용학원</h1>
            <p className="hero-lead">
              오창 산업단지 교대와 세종에서 넘어오는 통학,
              성안길 단골 샵의 평일 오전은 같은 주에 공존합니다.
              청주펫스쿨은 기술 이름보다 비어 있는 요일을 먼저 받습니다.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#schedule">
                요일부터 보기
              </a>
              <a className="btn btn-ghost" href="#ochang">
                오창·세종
              </a>
            </div>
          </div>
        </section>

        <section className="keyword-bar" aria-label="청주 검색어">
          <div className="container keyword-bar-inner">
            <span>#청주애견미용학원</span>
            <span>#청주펫스쿨</span>
            <span>#청주강아지미용학원</span>
            <span>#오창애견미용</span>
            <span>#가경애견미용학원</span>
            <span>#충북애견미용학원</span>
            <span>#애견미용학원비용</span>
          </div>
        </section>

        <section className="section" id="schedule">
          <div className="container narrow">
            <p className="eyebrow">Grid</p>
            <h2>빈칸이 없는 요일표는 등록하지 않습니다</h2>
            <p>
              <strong>청주애견미용학원</strong> 상담은 달력을 펼치고 시작합니다.
              오창은 주간·야간 근무가 바뀌고, 가경은 터미널 교대,
              세종은 출퇴근 도로가 목요일 저녁에 막히는 경우가 많습니다.
              희망 기술과 상관없이, 두 주 연속 같은 요일에 앉을 수 없으면
              긴 과정 대신 짧은 핸들링만 제안합니다.
            </p>
            <p>
              <strong>청주펫스쿨</strong>의 기본 칸은 세 개입니다.
              새벽 마감 근무가 끝나는 오전, 성안길 단골이 적은 평일 낮,
              세종 차량이 빠지는 토요일 오전. 칸이 겹치면 반을 합치지 않고
              한 명을 다른 칸으로 보냅니다.
            </p>
          </div>
        </section>

        <section className="section section-alt" id="curriculum">
          <div className="container">
            <div className="section-head left">
              <p className="eyebrow">Hands</p>
              <h2>도심 소형견과 전원 중형견을 같은 주에 넣지 않습니다</h2>
              <p>
                청주는 성안길·복대의 실내 소형견과, 외곽에서 오는
                중형 산책견이 한 상담실에 섞입니다.
                <strong>청주강아지미용학원</strong> 시간표는 요일로 견격을 나눕니다.
              </p>
            </div>
            <div className="info-grid curriculum-grid">
              <article>
                <span className="step-num">월</span>
                <h3>소형 얼굴</h3>
                <p>실내견의 눈밑과 수염. 힘을 빼는 연습이 전부입니다.</p>
              </article>
              <article>
                <span className="step-num">수</span>
                <h3>중형 리드</h3>
                <p>테이블보다 바닥 자세. 큰 개가 서는 위치를 먼저 정합니다.</p>
              </article>
              <article>
                <span className="step-num">금</span>
                <h3>목욕 동선</h3>
                <p>가경 샵처럼 좁은 욕실을 가정해 발 디딜 칸을 셉니다.</p>
              </article>
              <article>
                <span className="step-num">토</span>
                <h3>이어서 하기</h3>
                <p>평일에 못 온 부위를 토요일에만 마무리합니다. 새 기술을 넣지 않습니다.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section" id="ochang">
          <div className="container split">
            <div>
              <p className="eyebrow">Outside</p>
              <h2>오창은 교대, 세종은 도로, 증평은 배차</h2>
              <p>
                상담 거점은 흥덕구 가경입니다. 오창 과학산업단지는
                근무표 사진을 보여 주면 그 주의 월·수·금을 다시 짭니다.
                세종 행복도시에서 오는 분은 목요일을 비워 두고,
                증평은 버스 배차가 성긴 시간대를 피해 낮 칸을 제안합니다.
              </p>
              <p>
                <strong>충북애견미용학원</strong>이라는 넓은 말로 찾지 않아도
                실제 계산은 이 세 곳의 이동입니다. 청주 시내만 된다고
                단정하지 않고, 막히는 요일만 빼는 식으로 맞춥니다.
              </p>
            </div>
            <figure className="media-frame">
              <img
                src={img("01")}
                alt="청주펫스쿨 소형견 얼굴 연습"
                loading="lazy"
                width={800}
                height={1000}
              />
            </figure>
          </div>
        </section>

        <section className="section section-alt" id="career">
          <div className="container narrow">
            <p className="eyebrow">Shop</p>
            <h2>청주 살롱은 요일 고정 알바를 먼저 구합니다</h2>
            <p>
              기술 목록보다 “매주 수요일 오전”처럼 비는 칸을 채울 사람을 찾습니다.
              그래서 후반 과제는 이력서의 한 줄입니다.
              가능한 요일, 다루던 견격, 목욕 동선을 세 문장으로 줄입니다.
              <strong>애견미용사자격증</strong>은 그 문장 아래 각주로만 두고,
              자격만 있고 요일이 비어 있으면 소개하지 않습니다.
            </p>
          </div>
        </section>

        <section className="section" id="price">
          <div className="container narrow">
            <p className="eyebrow">Slots</p>
            <h2>애견미용학원비용은 칸 수입니다</h2>
            <p>
              주 2칸과 주 4칸은 모델 배정이 두 배 가깝게 차이 납니다.
              <strong>애견미용학원비용</strong>은 칸당 모델 수, 견격(소형/중형),
              결석 때 토요일 이월 가능 횟수로 적습니다.
              교대가 바뀌는 오창 수강생은 이월 횟수를 처음부터 늘려 잡고
              그 차이를 비용에 반영합니다.
            </p>
            <div className="info-grid price-grid">
              <article>
                <h3>2칸</h3>
                <p>오창 교대, 세종 주말. 토요일은 마무리 전용.</p>
              </article>
              <article>
                <h3>4칸</h3>
                <p>성안길·가경 평일. 소형과 중형을 요일로 나눕니다.</p>
              </article>
              <article>
                <h3>이월</h3>
                <p>근무표가 바뀌는 달. 칸 수는 유지하고 요일만 이동합니다.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section section-alt" id="gallery">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Days</p>
              <h2>요일 이름이 적힌 청주 실습</h2>
              <p>사진 파일명 대신 월·수·금·토로 구분합니다.</p>
            </div>
            <div className="gallery-grid">
              {GALLERY.map((n) => (
                <figure key={n}>
                  <img
                    src={img(n)}
                    alt={`청주애견미용학원 요일 실습 ${n}`}
                    loading="lazy"
                    width={600}
                    height={750}
                  />
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-faq" id="faq">
          <div className="container narrow">
            <p className="eyebrow">FAQ</p>
            <h2>청주 시간표 질문</h2>
            <div className="faq-list">
              <details open>
                <summary>야간 근무 다음 날 오전에 자도 되나요?</summary>
                <p>
                  오창 근무표가 그러면 오전 칸을 그 주만 비웁니다.
                  기술을 밀고 나가지 않고 토요일 마무리로 넘깁니다.
                </p>
              </details>
              <details>
                <summary>세종에서 매주 평일이 가능한가요?</summary>
                <p>
                  목요일은 비우는 편이 안전합니다. 4칸이 어려우면 2칸으로 시작하고
                  도로가 비는 달을 봐서 올립니다.
                </p>
              </details>
              <details>
                <summary>중형견을 키워서 소형 반은 의미가 없나요?</summary>
                <p>
                  수요일 중형 리드가 따로 있습니다. 월요 소형 얼굴과 억지로 섞지 않습니다.
                </p>
              </details>
              <details>
                <summary>성안길 샵은 오전에 사람이 없나요?</summary>
                <p>
                  단골 예약이 오후로 몰리는 날이 있어 평일 낮 칸을 실습으로 씁니다.
                  샵마다 다르므로 희망 매장 요일을 상담 때 대조합니다.
                </p>
              </details>
            </div>
          </div>
        </section>

        <section className="section section-contact" id="contact">
          <div className="container narrow contact-box">
            <p className="eyebrow">Gagyung</p>
            <h2>가경에서 요일표만 가져오셔도 됩니다</h2>
            <p>
              근무표나 통학 요일을 보여 주시면 2칸과 4칸 중 어디가
              두 주 연속 채워지는지 그 자리에서 표시합니다.
            </p>
            <p className="contact-brand">
              {SITE.brandKo} · {SITE.schoolName}
            </p>
            <p className="contact-address">{SITE.address}</p>
            <p className="contact-address-sub">{SITE.addressDetail}</p>
            <a className="btn btn-primary" href="#schedule">
              요일 규칙으로
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div>
            <p className="footer-brand-en">{SITE.brandEn}</p>
            <p className="footer-brand-ko">{SITE.brandKo}</p>
            <p className="footer-seo">{SITE.title}</p>
          </div>
          <div className="footer-meta">
            <p>{SITE.address}</p>
            <p>청주애견미용학원 · 청주펫스쿨 · 가경애견미용학원</p>
            <p className="footer-managed">
              <img src="/kkf-logo.png" alt="" width={36} height={36} />
              <span>한국애견연맹 반려문화증진위원회에 의해 관리되는 페이지입니다.</span>
            </p>
            <p className="footer-copy">
              &copy; {year} {SITE.brandKo}. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
