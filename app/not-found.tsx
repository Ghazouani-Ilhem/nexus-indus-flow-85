export default function NotFound(){
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-subtle">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="w-20 h-20 bg-gradient-tech rounded-full flex items-center justify-center mx-auto mb-8">
          <div className="text-3xl font-bold text-primary-foreground">404</div>
        </div>
        <h1 className="text-4xl font-bold mb-4 text-foreground">Page Not Found</h1>
        <p className="text-xl text-muted-foreground mb-8">The page you're looking for doesn't exist or has been moved.</p>
        <a href="/" className="inline-flex items-center px-6 py-3 bg-gradient-tech text-secondary-foreground font-semibold rounded-lg hover:bg-secondary-dark transition-colors duration-300 shadow-tech">Return to Home</a>
      </div>
    </div>
  );
}
