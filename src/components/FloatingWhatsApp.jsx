function FloatingWhatsApp() {
  const whatsappUrl = "https://api.whatsapp.com/send?phone=5519981286842";

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          backgroundColor: "#25D366",
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
        }}
      >
        <MessageCircle size={28} color="#fff" />
      </a>
    </div>
  );
}