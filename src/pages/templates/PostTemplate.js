import React from "react";
import "../../css/postTemplate.css";
import { useNavigate } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
function PostTemplate() {
  let navigate = useNavigate();
  let post = {
    category: "ANIMATION",
    categoryURL: "/category/animation",
    title:
      "New platform Holdframe offers animators’ full project files for others to download and explore",
    thumbnail: "/city-of-london-view-1225398.jpg",
    headerImage: "/people-1458971.jpg",
    introText: "Eum te vocent corpora invidunt, id doming numquam delenit vix.",
    postContent: `Ea iudico labore deserunt mei, pro ad dicant forensibus dissentiunt, mel id hendrerit 
                incorrupte.Viris laudem malorum an eum, cu quo elit albucius corrumpit. Inani mollis
                pericula an nec. Modo brute liber ea qui, aeque cetero duo ei.Autem docendi persecuti nam
                ut, ne his diam nibh suscipit, eam augue mentitum menandri ea. Consulatu percipitur et nam
                cum ex inermis vocibus.
                
                Nobis deterruisset usu in, dicam oporteat apeirian no usu. Vix no 
                evertitur maiestatis, tota idque solet eu eos. Offendit suscipit pri cu. Modo volumus 
                eleifend ut duo, ex euismod signiferumque nec. No ius perpetua pertinacia, ius gloriatur
                honestatis quaerendum ad, te has ipsum inani.Ea sit eruditi definiebas. Causae labitur 
                maiestatis sed in. Qui inani facilisis ne, ut vel menandri mediocritatem. Id utinam 
                postea possit pri, sea no aliquam imperdiet voluptatibus, in usu diceret oportere 
                pertinacia.

                Deserunt theophrastus mea an.Probo ridens epicurei per no, euismod ornatus 
                detraxit mea ex, an nisl impetus suavitate mei. Ut aperiri recusabo facilisis eam, ei his 
                veniam noluisse. Eu facilis disputando eum. Ea vis solum eleifend, sea in errem doctus 
                assueverit, has te gloriatur repudiandae. Eu mei nobis bonorum civibus:No vocent 
                postulant neglegentur mei, ea sea tantas viderer, scriptorem appellantur vel at. Illum 
                reformidans mel no. An sea veri nusquam gubergren, ne sea dolor labitur. Aeque integre 
                adipisci nec ne.Elitr aliquando vis ne, eum ea omittam adipisci, elitr tation vix ei.
                Homero inimicus et eos, graece legimus pri cu. Vix ei animal equidem. Quo ne ceteros
                deseruisse, ut vim movet integre, vel ea amet ferri. Duo agam mutat saperet cu, his 
                at gloriatur moderatius. Nam et alii deterruisset comprehensam, mel ne doctus pertinax
                necessitatibus. Ipsum error utinam vis no.Id nec ullum accumsan, omittam fabellas vis in.
                Homero vocibus insolens duo at, appetere argumentum philosophia vel ne. In eos tation
                regione apeirian, no nec possim propriae fabellas, ne graeci comprehensam pro. Sed cu 
                legimus commune, aperiam luptatum eam at. Scaevola scribentur ei his, gubergren 
                elaboraret vim ea.Id sale ubique sit.
                
                Id eam oblique epicuri. Sit duis placerat 
                molestiae ad, nam ut minim erant definitionem. Argumentum referrentur sea ut, eu eam 
                falli persequeris voluptatibus. Ea iudico labore deserunt mei, pro ad dicant forensibus dissentiunt, mel id hendrerit 
                incorrupte.Viris laudem malorum an eum, cu quo elit albucius corrumpit. Inani mollis
                pericula an nec. Modo brute liber ea qui, aeque cetero duo ei.Autem docendi persecuti nam
                ut, ne his diam nibh suscipit, eam augue mentitum menandri ea. Consulatu percipitur et nam
                cum ex inermis vocibus.

                Nobis deterruisset usu in, dicam oporteat apeirian no usu. Vix no 
                evertitur maiestatis, tota idque solet eu eos. Offendit suscipit pri cu. Modo volumus 
                eleifend ut duo, ex euismod signiferumque nec. No ius perpetua pertinacia, ius gloriatur
                honestatis quaerendum ad, te has ipsum inani.Ea sit eruditi definiebas. Causae labitur 
                maiestatis sed in. Qui inani facilisis ne, ut vel menandri mediocritatem. Id utinam 
                postea possit pri, sea no aliquam imperdiet voluptatibus, in usu diceret oportere 
                pertinacia.

                Deserunt theophrastus mea an.Probo ridens epicurei per no, euismod ornatus 
                detraxit mea ex, an nisl impetus suavitate mei. Ut aperiri recusabo facilisis eam, ei his 
                veniam noluisse. Eu facilis disputando eum. Ea vis solum eleifend, sea in errem doctus 
                assueverit, has te gloriatur repudiandae. Eu mei nobis bonorum civibus:No vocent 
                postulant neglegentur mei, ea sea tantas viderer, scriptorem appellantur vel at. Illum 
                reformidans mel no. An sea veri nusquam gubergren, ne sea dolor labitur. Aeque integre 
                adipisci nec ne.Elitr aliquando vis ne, eum ea omittam adipisci, elitr tation vix ei.
                Homero inimicus et eos, graece legimus pri cu. Vix ei animal equidem. Quo ne ceteros
                deseruisse, ut vim movet integre, vel ea amet ferri. Duo agam mutat saperet cu, his 
                at gloriatur moderatius. Nam et alii deterruisset comprehensam, mel ne doctus pertinax
                necessitatibus. Ipsum error utinam vis no.Id nec ullum accumsan, omittam fabellas vis in.
                Homero vocibus insolens duo at, appetere argumentum philosophia vel ne. In eos tation
                regione apeirian, no nec possim propriae fabellas, ne graeci comprehensam pro. Sed cu 
                legimus commune, aperiam luptatum eam at. Scaevola scribentur ei his, gubergren 
                elaboraret vim ea.Id sale ubique sit.
                
                Id eam oblique epicuri. Sit duis placerat 
                molestiae ad, nam ut minim erant definitionem. Argumentum referrentur sea ut, eu eam 
                falli persequeris voluptatibus.`,
    author: "Simeon Brekke",
    authorURL: "/authors/siemon-brekke",
    tags: ["interviews", "featured"],
  };

  let latestPosts = [
    {
      title: "Helmut Lang celebrates taxi drivers worldwide in latest campaign",
      author: "Alessandra Ortiz",
      authorURL: "/authors/alessandra-ortiz",
      category: (
        <span onClick={() => navigate("categories/photography")}>
          photography
        </span>
      ),
    },
    {
      title: "Helmut Lang celebrates taxi drivers worldwide in latest campaign",
      author: "Alessandra Ortiz",
      authorURL: "/authors/alessandra-ortiz",
      category: (
        <span onClick={() => navigate("categories/photography")}>
          photography
        </span>
      ),
    },
  ];

  return (
    <div className="post-template">
      <div className="title-section">
        <div className="container">
          <div className="text-container">
            <div
              className="category-link"
              onClick={() => navigate(`${post.categoryURL}`)}
            >
              {post.category}
            </div>
            <h1 className="post-title">{post.title}</h1>
            <div className="post-author-text">
              <div className="author-image-wrapper">
                <img
                  className="author-image"
                  alt={`${post.author} profile`}
                  src="/people-1458971.jpg"
                />
              </div>
              <div
                className="post-author"
                onClick={() => navigate(`${post.authorURL}`)}
              >
                {post.author}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="post-image">
        <img src={post.headerImage} alt="header" />
      </div>
      <div className="post-content">
        <div className="post-content-wrapper">
          <p> {post.postContent}</p>
        </div>
      </div>
      <div className="divider"></div>
      <div className="latest-posts">
        <Row style={{ padding: "25px 10px" }}>
          <h1>LATEST POSTS</h1>
          {latestPosts.map((post) => {
            return (
              <Col lg={3} className="post-tile">
                <div
                  className="post-image-template"
                  onClick={() => navigate("/posts/example")}
                ></div>
                <div className="info-text">
                  <div className="category-link">{post.category}</div>
                  <h3
                    className="post-title"
                    onClick={() => navigate("/posts/example")}
                  >
                    {post.title}
                  </h3>
                  <div
                    className="post-author"
                    onClick={() => navigate(`${post.authorURL}`)}
                  >
                    BY {post.author}
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}

export default PostTemplate;
