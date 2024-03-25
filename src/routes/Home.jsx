import Header from "../Layouts/Header";
import Products from "../Layouts/Products";
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <div className="backgound">
          <img
            alt="Fill your basket with joy"
            src="https://m.media-amazon.com/images/I/71VBt4eTg3L._SX3000_.jpg"
            class="_cropped-image-link_style_fluidLandscapeImage__3eTVC 
            _cropped-image-link_style_fluidImage__iJ3aE"
            data-a-hires="https://m.media-amazon.com/images/I/71VBt4eTg3L._SX3000_.jpg"
          />
        </div>
        <Products></Products>
      </main>
  
    </>
  );
}
