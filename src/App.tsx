/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Hero } from './components/Hero';
import { BentoGrid } from './components/BentoGrid';
import { Navbar } from './components/Navbar';
import { Contact } from './components/Contact';
import { Services } from './components/Services';
import { Cases } from './components/Cases';

export default function App() {
  return (
    <main className="min-h-screen bg-[#05050b] text-white selection:bg-[#007AFF] selection:text-white">
      <Navbar />
      <Hero />
      <BentoGrid />
      <Services />
      <Cases />
      <Contact />
      
      {/* Simple Footer */}
      <footer className="py-12 text-center text-white/40 text-sm border-t border-white/10 mt-12">
        <p>© {new Date().getFullYear()} ReCom Group. Управление коммерческой недвижимостью.</p>
      </footer>
    </main>
  );
}

