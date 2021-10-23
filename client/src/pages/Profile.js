import React from "react";
import Navbar from "../components/navbar";
import World from "../img/world.png";
import EditButton from "../components/EditTextButton";
export default function Profile() {
  return (
    <div>
      <header>
        <Navbar />
        <div className="container">
          <div className="row align-items-center pt-5">
            <div className="col-lg-6 text-end px-5" id="profile-header">
              <div id="profile-header-text" className="mt-5">
                <h1 className="fs-xl fw-bold">
                  <span contentEditable="true">
                    <EditButton />
                    Merhaba!
                  </span>

                  <br />
                  <span className="fs-lg">
                    <EditButton />
                    Ben Yunus Emre
                  </span>
                </h1>
                <h2 className="fs-sm p-0 m-0 fw-bold">
                  <EditButton />
                  Görsel İletişim Tasarımcısıyım.
                </h2>
              </div>
            </div>

            <div className="col-lg-6 px-5">
              <div id="header-img-wrapper">
                <img
                  src={World}
                  className="img-fluid float-end border-radient w-100"
                  id="header-img"
                  alt="..."
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="py-5">
        <div className="container">
          <div
            className="text-center text-white fs-md py-5 mx-auto my-5"
            id="profile-text"
          >
            <span>
              <EditButton />
              Dijital çizimler ve içerikler üretirken birçok farklı yola
              başvurmakla birlikte çizimlerimde kendimi yansıtmaya çalışıyorum.
            </span>
            <br />
            <span>
              <EditButton />
              Bana ait olduğunun anlaşılması için hayal dünyamı içeriklerimle
              bütünleştiriyorum.
            </span>
          </div>
        </div>
      </main>

      <section id="profile-section">
        <div className="container-fluid">
          <div className="row align-items-center py-5">
            <div className="col-lg-5">
              <div className="mx-auto" id="profile-circle-outer">
                <div className="p-5" id="profile-circle-inner"></div>
              </div>
            </div>
            <div className="col-lg-7">
              <p className="fs-xs align-items-xl-stretch py-5 fw-bold">
              &emsp;
                <span>
                  Mersin’in Çamlıyayla ilçesinde doğdum. Eğitim hayatıma
                  Aliye Pozcu İlköğretim Okulu’nda başladım. Çizime olan ilgim
                  bu yaşlarda ailemden gördüğüm şeyler ile başladı. Lakin
                  eğitimimde çizime dair bir gelişme olmadı. Lise hayatımı
                  Mersin Dumlupınar Lisesi’nde geçirdim. <EditButton />
                </span>

                <br />
                &emsp;
                <span>
                  Üniversite düşüncesi zihnime girdiğinde tekrardan çizim
                  üzerine yoğunlaşabileceğim bir bölüm arıyordum. Araştırmalarım
                  sonucunda Ahi Evran Üniversitesi Grafik Tasarım bölümüne
                  başladım. Önlisans programı olan bu bölüm biterken farklı
                  firmalarda stajyer olarak görev yaptım. Yetmeyeceğini
                  düşündüğüm bir noktada eğitimimi Lisans seviyesine çıkartmak
                  için Yetenek sınavlarını araştırıp 2 aylık bir desen eğitimi
                  sonucunda Erciyes Üniversitesi Güzel Sanatlar Fakültesi Görsel
                  İletişim Tasarımı bölümüne girmeye hak kazandım. Eğitim
                  süresince Serbest bir tasarımcı olarak işler aldım. 4 sene
                  sonunda eğitimimi tamamladım.
                  <EditButton />
                </span>

                <br />
                &emsp;
                <span>
                  Eğitimim sonrasında Askerlik görevimi Yedek Subay olarak
                  Millî Savunma Bakanlığı bünyesinde bir senede tamamladım.
                  Bakanlık içerisinde tasarımcı olarak yaptığım bu görevi yerine
                  getirdim.
                  <EditButton />
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
