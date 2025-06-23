export function Footer() {
  return (
    <footer className="bg-muted/50 py-12">
      <div className="container mx-auto px-4 text-center  ">
        © {new Date().getFullYear()} Career Coach. All rights reserved.
      </div>
    </footer>
  );
}