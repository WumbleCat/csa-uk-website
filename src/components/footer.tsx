import Link from "next/link";
import { Facebook, Instagram, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="text-center py-8 text-sm text-muted-foreground bg-white border-t"
    >
      {/* Social & Contact Buttons (Extra Large) */}
      <div className="flex justify-center space-x-6 mb-4">
        {/* Email */}
        <Link href="mailto:acsuk.society@gmail.com" aria-label="Email CSA-UK">
          <div className="p-6 rounded-full hover:bg-gray-100 transition">
            <Mail size={32} />
          </div>
        </Link>
        {/* Facebook */}
        <Link
          href="https://www.facebook.com/profile.php?id=61568716532857&locale=en_GB"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="CSA-UK on Facebook"
        >
          <div className="p-6 rounded-full hover:bg-gray-100 transition">
            <Facebook size={32} />
          </div>
        </Link>
        {/* Instagram */}
        <Link
          href="https://www.instagram.com/csauk_association/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="CSA-UK on Instagram"
        >
          <div className="p-6 rounded-full hover:bg-gray-100 transition">
            <Instagram size={32} />
          </div>
        </Link>
      </div>

      {/* Contact Text */}
      <p className="mb-2">
        Contact us via{" "}
        <a
          href="mailto:acsuk.society@gmail.com"
          className="underline hover:text-foreground/80"
        >
          acsuk.society@gmail.com
        </a>
        , our{" "}
        <a
          href="https://www.facebook.com/profile.php?id=61568716532857&locale=en_GB"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-foreground/80"
        >
          Facebook
        </a>
        , or{" "}
        <a
          href="https://www.instagram.com/csauk_association/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-foreground/80"
        >
          Instagram
        </a>
        .
      </p>

      {/* Copyright */}
      <div>© {new Date().getFullYear()} CSA-UK. All rights reserved.</div>
    </footer>
  );
}
