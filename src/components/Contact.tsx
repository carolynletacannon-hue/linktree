import { ArrowUpRight } from 'lucide-react';
import { socialLinks, siteConfig } from '../data/links';
import { BrandIcon } from './Icons';

export function Contact() {
  return <section id="contact" className="contact section"><div className="reveal"><p className="eyebrow">Professional inquiries</p><h2>Let’s make<br />something <em>real.</em></h2></div><div className="contact-side reveal"><p>Management, collaboration, production, and business inquiries</p><a className="email" href={`mailto:${siteConfig.email}`}>{siteConfig.email}<ArrowUpRight /></a><div className="socials">{socialLinks.map((social) => <a href={social.url} target="_blank" rel="noreferrer" aria-label={social.name} key={social.name}><BrandIcon name={social.name} /></a>)}</div></div></section>;
}
