
Action: file_editor view /app/frontend/src/App.js
Observation: [Showing lines 1-855 of 855 total] /app/frontend/src/App.js:
1|import { useEffect, useState } from "react";
2|import "@/App.css";
3|import { BrowserRouter, Routes, Route, Link, useParams, useNavigate, useSearchParams } from "react-router-dom";
4|import axios from "axios";
5|import { Globe, GraduationCap, Crown, Building2, Dumbbell, Ticket, Briefcase, Brain, Users, Glasses, Search, Clock, ChevronRight, Check, X, Menu, ArrowLeft, Star } from "lucide-react";
6|
7|const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
8|const API = `${BACKEND_URL}/api`;
9|
10|// PayPal Client ID - sandbox for testing
11|const PAYPAL_CLIENT_ID = "sb";
12|
13|// Icon mapping
14|const iconMap = {
15|  Globe, GraduationCap, Crown, Building2, Dumbbell, Ticket, Briefcase, Brain, Users, Glasses
16|};
17|
18|// ============ NAVBAR ============
19|const Navbar = () => {
20|  const [scrolled, setScrolled] = useState(false);
21|  const [menuOpen, setMenuOpen] = useState(false);
22|
23|  useEffect(() => {
24|    const handleScroll = () => setScrolled(window.scrollY > 50);
25|    window.addEventListener('scroll', handleScroll);
26|    return () => window.removeEventListener('scroll', handleScroll);
27|  }, []);
28|
29|  return (
30|    <header 
31|      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'nav-glass border-b border-white/10' : 'bg-transparent'}`}
32|      data-testid="navbar"
33|    >
34|      <div className="max-w-7xl mx-auto px-6 lg:px-8">
35|        <nav className="flex items-center justify-between h-20">
36|          <Link to="/" className="flex items-center gap-3" data-testid="logo-link">
37|            <span className="font-elegant text-3xl italic text-gold-gradient">VIPS</span>
38|          </Link>
39|          
40|          <div className="hidden md:flex items-center gap-8">
41|            <Link to="/" className="text-sm font-medium text-[#A0A0A5] hover:text-[#E5A93D] transition-colors" data-testid="nav-tours">Tours</Link>
42|            <Link to="/#categories" className="text-sm font-medium text-[#A0A0A5] hover:text-[#E5A93D] transition-colors" data-testid="nav-categories">Categories</Link>
43|            <Link to="/#about" className="text-sm font-medium text-[#A0A0A5] hover:text-[#E5A93D] transition-colors" data-testid="nav-about">About</Link>
44|            <Link to="/#contact" className="text-sm font-medium text-[#A0A0A5] hover:text-[#E5A93D] transition-colors" data-testid="nav-contact">Contact</Link>
45|          </div>
46|
47|          <button 
48|            className="md:hidden text-[#F3EFE7]" 
49|            onClick={() => setMenuOpen(!menuOpen)}
50|            data-testid="mobile-menu-btn"
51|          >
52|            {menuOpen ? <X size={24} /> : <Menu size={24} />}
53|          </button>
54|        </nav>
55|
56|        {/* Mobile menu */}
57|        {menuOpen && (
58|          <div className="md:hidden py-4 border-t border-white/10 animate-fade-in" data-testid="mobile-menu">
59|            <Link to="/" className="block py-3 text-[#A0A0A5] hover:text-[#E5A93D]" onClick={() => setMenuOpen(false)}>Tours</Link>
60|            <Link to="/#categories" className="block py-3 text-[#A0A0A5] hover:text-[#E5A93D]" onClick={() => setMenuOpen(false)}>Categories</Link>
61|            <Link to="/#about" className="block py-3 text-[#A0A0A5] hover:text-[#E5A93D]" onClick={() => setMenuOpen(false)}>About</Link>
62|            <Link to="/#contact" className="block py-3 text-[#A0A0A5] hover:text-[#E5A93D]" onClick={() => setMenuOpen(false)}>Contact</Link>
63|          </div>
64|        )}
65|      </div>
66|    </header>
67|  );
68|};
69|
70|// ============ HERO ============
71|const Hero = () => {
72|  const [searchQuery, setSearchQuery] = useState('');
73|  const navigate = useNavigate();
74|
75|  const handleSearch = (e) => {
76|    e.preventDefault();
77|    if (searchQuery.trim()) {
78|      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
79|    }
80|  };
81|
82|  return (
83|    <section className="relative min-h-screen flex items-center justify-center" data-testid="hero-section">
84|      {/* Background image */}
85|      <div className="absolute inset-0">
86|        <img 
87|          src="https://images.unsplash.com/photo-1588336443962-49d88df004a1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjB3ZWFyaW5nJTIwdnIlMjBoZWFkc2V0JTIwZGFya3xlbnwwfHx8fDE3NzY1NjU3ODh8MA&ixlib=rb-4.1.0&q=85"
88|          alt="VR Experience"
89|          className="w-full h-full object-cover"
90|        />
91|        <div className="hero-overlay absolute inset-0" />
92|      </div>
93|
94|      {/* Content */}
95|      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-20">
96|        <div className="max-w-3xl">
97|          <p className="font-heading text-sm uppercase tracking-[0.2em] text-[#E5A93D] mb-6 animate-fade-in-up opacity-0" style={{animationDelay: '100ms', animationFillMode: 'forwards'}}>
98|            Virtual Interactive Processing Service
99|          </p>
100|          <h1 className="font-heading text-5xl md:text-7xl font-black uppercase leading-none mb-6 animate-fade-in-up opacity-0" style={{animationDelay: '200ms', animationFillMode: 'forwards'}}>
101|            <span className="text-[#F3EFE7]">Experience</span>
102|            <br />
103|            <span className="font-elegant italic font-normal normal-case text-gold-gradient">the Extraordinary</span>
104|          </h1>
105|          <p className="text-lg md:text-xl text-[#A0A0A5] leading-relaxed mb-10 max-w-xl animate-fade-in-up opacity-0" style={{animationDelay: '300ms', animationFillMode: 'forwards'}}>
106|            Premium virtual tours and live experiences. From celebrity homes to VR adventures — access worlds you've only dreamed of.
107|          </p>
108|
109|          {/* Search bar */}
110|          <form onSubmit={handleSearch} className="animate-fade-in-up opacity-0" style={{animationDelay: '400ms', animationFillMode: 'forwards'}}>
111|            <div className="search-bar flex items-center gap-4 p-2 pl-6 max-w-xl">
112|              <Search className="text-[#A0A0A5]" size={20} />
113|              <input 
114|                type="text"
115|                placeholder="Search tours..."
116|                value={searchQuery}
117|                onChange={(e) => setSearchQuery(e.target.value)}
118|                className="flex-1 bg-transparent border-none outline-none text-[#F3EFE7] placeholder:text-[#A0A0A5]"
119|                data-testid="hero-search-input"
120|              />
121|              <button 
122|                type="submit" 
123|                className="btn-primary px-6 py-3"
124|                data-testid="hero-search-btn"
125|              >
126|                Search
127|              </button>
128|            </div>
129|          </form>
130|        </div>
131|      </div>
132|
133|      {/* Scroll indicator */}
134|      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
135|        <div className="w-6 h-10 border-2 border-[#A0A0A5] rounded-full flex items-start justify-center p-2">
136|          <div className="w-1.5 h-3 bg-[#E5A93D] rounded-full" />
137|        </div>
138|      </div>
139|    </section>
140|  );
141|};
142|
143|// ============ CATEGORY CARD ============
144|const CategoryCard = ({ category, index, large = false }) => {
145|  const IconComponent = iconMap[category.icon];
146|  
147|  return (
148|    <Link 
149|      to={`/category/${category.id}`}
150|      className={`group relative block overflow-hidden hover-lift ${large ? 'col-span-12 md:col-span-8 aspect-[2/1]' : 'col-span-12 md:col-span-4 aspect-square'}`}
151|      style={{ animationDelay: `${index * 100}ms` }}
152|      data-testid={`category-card-${category.id}`}
153|    >
154|      <div className="absolute inset-0">
155|        <img 
156|          src={category.image} 
157|          alt={category.name}
158|          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
159|        />
160|        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
161|      </div>
162|      
163|      <div className="relative h-full flex flex-col justify-end p-6 md:p-8">
164|        <div className="flex items-center gap-3 mb-3">
165|          {IconComponent && <IconComponent className="text-[#E5A93D]" size={24} />}
166|          <span className="font-heading text-xl md:text-2xl font-bold uppercase text-[#F3EFE7]">{category.name}</span>
167|        </div>
168|        <p className="text-[#A0A0A5] text-sm md:text-base leading-relaxed max-w-md">{category.description}</p>
169|        <div className="mt-4 flex items-center gap-2 text-[#E5A93D] font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
170|          <span>Explore Tours</span>
171|          <ChevronRight size={16} />
172|        </div>
173|      </div>
174|    </Link>
175|  );
176|};
177|
178|// ============ CATEGORIES SECTION ============
179|const CategoriesSection = ({ categories }) => {
180|  return (
181|    <section id="categories" className="py-24 px-6 lg:px-8" data-testid="categories-section">
182|      <div className="max-w-7xl mx-auto">
183|        <div className="mb-12">
184|          <p className="font-heading text-sm uppercase tracking-[0.2em] text-[#E5A93D] mb-4">Explore</p>
185|          <h2 className="font-heading text-4xl md:text-5xl font-black uppercase text-[#F3EFE7]">
186|            Tour <span className="font-elegant italic font-normal normal-case text-gold-gradient">Categories</span>
187|          </h2>
188|        </div>
189|
190|        <div className="bento-grid">
191|          {categories.map((cat, i) => (
192|            <CategoryCard 
193|              key={cat.id} 
194|              category={cat} 
195|              index={i}
196|              large={i === 0 || i === 5}
197|            />
198|          ))}
199|        </div>
200|      </div>
201|    </section>
202|  );
203|};
204|
205|// ============ TOUR CARD ============
206|const TourCard = ({ tour }) => {
207|  return (
208|    <Link 
209|      to={`/tour/${tour.id}`} 
210|      className="tour-card card-glow block"
211|      data-testid={`tour-card-${tour.id}`}
212|    >
213|      <div className="tour-card-image">
214|        <img src={tour.image} alt={tour.name} />
215|        <div className="absolute top-4 right-4 price-tag">${tour.price.toFixed(2)}</div>
216|        {tour.featured && (
217|          <div className="absolute top-4 left-4 flex items-center gap-1 px-3 py-1 bg-[#E5A93D] text-black text-xs font-bold">
218|            <Star size={12} fill="currentColor" />
219|            Featured
220|          </div>
221|        )}
222|      </div>
223|      <div className="p-5">
224|        <div className="duration-badge mb-3">
225|          <Clock size={14} />
226|          <span>{tour.duration}</span>
227|        </div>
228|        <h3 className="font-heading text-lg font-bold text-[#F3EFE7] mb-2 line-clamp-1">{tour.name}</h3>
229|        <p className="text-sm text-[#A0A0A5] line-clamp-2">{tour.short_description}</p>
230|      </div>
231|    </Link>
232|  );
233|};
234|
235|// ============ FEATURED TOURS ============
236|const FeaturedTours = ({ tours }) => {
237|  const featuredTours = tours.filter(t => t.featured).slice(0, 6);
238|  
239|  return (
240|    <section className="py-24 px-6 lg:px-8 bg-[#101014]" data-testid="featured-tours-section">
241|      <div className="max-w-7xl mx-auto">
242|        <div className="flex items-end justify-between mb-12">
243|          <div>
244|            <p className="font-heading text-sm uppercase tracking-[0.2em] text-[#E5A93D] mb-4">Curated For You</p>
245|            <h2 className="font-heading text-4xl md:text-5xl font-black uppercase text-[#F3EFE7]">
246|              Featured <span className="font-elegant italic font-normal normal-case text-gold-gradient">Experiences</span>
247|            </h2>
248|          </div>
249|          <Link to="/" className="hidden md:flex items-center gap-2 text-[#E5A93D] font-semibold hover:gap-4 transition-all" data-testid="view-all-tours">
250|            View All <ChevronRight size={18} />
251|          </Link>
252|        </div>
253|
254|        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
255|          {featuredTours.map(tour => (
256|            <TourCard key={tour.id} tour={tour} />
257|          ))}
258|        </div>
259|      </div>
260|    </section>
261|  );
262|};
263|
264|// ============ ABOUT SECTION ============
265|const AboutSection = () => {
266|  return (
267|    <section id="about" className="py-24 px-6 lg:px-8" data-testid="about-section">
268|      <div className="max-w-7xl mx-auto">
269|        <div className="grid md:grid-cols-2 gap-16 items-center">
270|          <div>
271|            <p className="font-heading text-sm uppercase tracking-[0.2em] text-[#E5A93D] mb-4">About VIPS</p>
272|            <h2 className="font-heading text-4xl md:text-5xl font-black uppercase text-[#F3EFE7] mb-6">
273|              Your Gateway to <span className="font-elegant italic font-normal normal-case text-gold-gradient">Exclusive Access</span>
274|            </h2>
275|            <p className="text-[#A0A0A5] leading-relaxed mb-6">
276|              Virtual Interactive Processing Service provides access to live Zoom-based presentations, expert-led tours, and immersive virtual experiences. From celebrity homes to VR adventures, we curate premium access to worlds you've only dreamed of.
277|            </p>
278|            <ul className="space-y-4">
279|              {['Live expert-led presentations', 'Premium virtual experiences', 'Exclusive access guaranteed', '30-day completion window'].map((item, i) => (
280|                <li key={i} className="flex items-center gap-3 text-[#F3EFE7]">
281|                  <Check className="text-[#E5A93D]" size={18} />
282|                  {item}
283|                </li>
284|              ))}
285|            </ul>
286|          </div>
287|          <div className="relative">
288|            <div className="aspect-[4/3] overflow-hidden">
289|              <img 
290|                src="https://images.unsplash.com/photo-1647101734210-ff5d79813069?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwxfHxkYXJrJTIwZ29sZCUyMHRleHR1cmUlMjBhYnN0cmFjdHxlbnwwfHx8fDE3NzY1NjU3ODh8MA&ixlib=rb-4.1.0&q=85"
291|                alt="Premium experience"
292|                className="w-full h-full object-cover"
293|              />
294|            </div>
295|            <div className="absolute -bottom-6 -right-6 bg-[#E5A93D] text-black p-8">
296|              <p className="font-heading text-4xl font-black">10+</p>
297|              <p className="text-sm font-semibold">Categories</p>
298|            </div>
299|          </div>
300|        </div>
301|      </div>
302|    </section>
303|  );
304|};
305|
306|// ============ CONTACT SECTION ============
307|const ContactSection = () => {
308|  return (
309|    <section id="contact" className="py-24 px-6 lg:px-8 bg-[#101014]" data-testid="contact-section">
310|      <div className="max-w-7xl mx-auto text-center">
311|        <p className="font-heading text-sm uppercase tracking-[0.2em] text-[#E5A93D] mb-4">Get In Touch</p>
312|        <h2 className="font-heading text-4xl md:text-5xl font-black uppercase text-[#F3EFE7] mb-6">
313|          Questions? <span className="font-elegant italic font-normal normal-case text-gold-gradient">We're Here</span>
314|        </h2>
315|        <p className="text-[#A0A0A5] max-w-xl mx-auto mb-10">
316|          Our support team is ready to help with scheduling, purchase questions, and order-related clarification.
317|        </p>
318|        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
319|          <a href="mailto:info@viptours365.com" className="btn-primary" data-testid="contact-email">
320|            info@viptours365.com
321|          </a>
322|          <a href="tel:8333835650" className="btn-secondary" data-testid="contact-phone">
323|            (833) 383-5650
324|          </a>
325|        </div>
326|      </div>
327|    </section>
328|  );
329|};
330|
331|// ============ FOOTER ============
332|const Footer = () => {
333|  return (
334|    <footer className="py-12 px-6 lg:px-8 border-t border-[#2A2A2E]" data-testid="footer">
335|      <div className="max-w-7xl mx-auto">
336|        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
337|          <div className="flex items-center gap-3">
338|            <span className="font-elegant text-2xl italic text-gold-gradient">VIPS</span>
339|            <span className="text-[#A0A0A5] text-sm">Virtual Interactive Processing Service LLC</span>
340|          </div>
341|          <p className="text-[#A0A0A5] text-sm">© 2026 Virtual Interactive Processing Service. All rights reserved.</p>
342|        </div>
343|      </div>
344|    </footer>
345|  );
346|};
347|
348|// ============ HOME PAGE ============
349|const HomePage = () => {
350|  const [categories, setCategories] = useState([]);
351|  const [tours, setTours] = useState([]);
352|  const [loading, setLoading] = useState(true);
353|
354|  useEffect(() => {
355|    const fetchData = async () => {
356|      try {
357|        const [catRes, tourRes] = await Promise.all([
358|          axios.get(`${API}/categories`),
359|          axios.get(`${API}/tours`)
360|        ]);
361|        setCategories(catRes.data);
362|        setTours(tourRes.data);
363|      } catch (e) {
364|        console.error("Error fetching data:", e);
365|      } finally {
366|        setLoading(false);
367|      }
368|    };
369|    fetchData();
370|  }, []);
371|
372|  if (loading) {
373|    return (
374|      <div className="min-h-screen flex items-center justify-center">
375|        <div className="text-[#E5A93D] animate-pulse">Loading...</div>
376|      </div>
377|    );
378|  }
379|
380|  return (
381|    <>
382|      <Hero />
383|      <CategoriesSection categories={categories} />
384|      <FeaturedTours tours={tours} />
385|      <AboutSection />
386|      <ContactSection />
387|    </>
388|  );
389|};
390|
391|// ============ CATEGORY PAGE ============
392|const CategoryPage = () => {
393|  const { categoryId } = useParams();
394|  const [category, setCategory] = useState(null);
395|  const [tours, setTours] = useState([]);
396|  const [loading, setLoading] = useState(true);
397|
398|  useEffect(() => {
399|    const fetchData = async () => {
400|      try {
401|        const [catRes, tourRes] = await Promise.all([
402|          axios.get(`${API}/categories/${categoryId}`),
403|          axios.get(`${API}/tours?category_id=${categoryId}`)
404|        ]);
405|        setCategory(catRes.data);
406|        setTours(tourRes.data);
407|      } catch (e) {
408|        console.error("Error fetching data:", e);
409|      } finally {
410|        setLoading(false);
411|      }
412|    };
413|    fetchData();
414|  }, [categoryId]);
415|
416|  if (loading) {
417|    return <div className="min-h-screen flex items-center justify-center"><div className="text-[#E5A93D] animate-pulse">Loading...</div></div>;
418|  }
419|
420|  if (!category) {
421|    return <div className="min-h-screen flex items-center justify-center text-[#F3EFE7]">Category not found</div>;
422|  }
423|
424|  const IconComponent = iconMap[category.icon];
425|
426|  return (
427|    <div className="pt-20" data-testid="category-page">
428|      {/* Header */}
429|      <div className="relative h-[40vh] min-h-[300px]">
430|        <img src={category.image} alt={category.name} className="w-full h-full object-cover" />
431|        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/50 to-transparent" />
432|        <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
433|          <div className="max-w-7xl mx-auto">
434|            <Link to="/" className="inline-flex items-center gap-2 text-[#A0A0A5] hover:text-[#E5A93D] mb-4 transition-colors" data-testid="back-link">
435|              <ArrowLeft size={18} />
436|              Back to Home
437|            </Link>
438|            <div className="flex items-center gap-4">
439|              {IconComponent && <IconComponent className="text-[#E5A93D]" size={32} />}
440|              <h1 className="font-heading text-4xl md:text-5xl font-black uppercase text-[#F3EFE7]">{category.name}</h1>
441|            </div>
442|            <p className="text-[#A0A0A5] mt-3 max-w-xl">{category.description}</p>
443|          </div>
444|        </div>
445|      </div>
446|
447|      {/* Tours grid */}
448|      <section className="py-16 px-6 lg:px-8">
449|        <div className="max-w-7xl mx-auto">
450|          <p className="text-[#A0A0A5] mb-8">{tours.length} tour{tours.length !== 1 ? 's' : ''} available</p>
451|          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
452|            {tours.map(tour => (
453|              <TourCard key={tour.id} tour={tour} />
454|            ))}
455|          </div>
456|        </div>
457|      </section>
458|    </div>
459|  );
460|};
461|
462|// ============ SEARCH PAGE ============
463|const SearchPage = () => {
464|  const [searchParams] = useSearchParams();
465|  const query = searchParams.get('q') || '';
466|  const [results, setResults] = useState([]);
467|  const [loading, setLoading] = useState(true);
468|
469|  useEffect(() => {
470|    const fetchResults = async () => {
471|      if (!query) {
472|        setLoading(false);
473|        return;
474|      }
475|      try {
476|        const res = await axios.get(`${API}/search?q=${encodeURIComponent(query)}`);
477|        setResults(res.data);
478|      } catch (e) {
479|        console.error("Search error:", e);
480|      } finally {
481|        setLoading(false);
482|      }
483|    };
484|    fetchResults();
485|  }, [query]);
486|
487|  return (
488|    <div className="pt-32 pb-16 px-6 lg:px-8 min-h-screen" data-testid="search-page">
489|      <div className="max-w-7xl mx-auto">
490|        <Link to="/" className="inline-flex items-center gap-2 text-[#A0A0A5] hover:text-[#E5A93D] mb-6 transition-colors" data-testid="back-link">
491|          <ArrowLeft size={18} />
492|          Back to Home
493|        </Link>
494|        <h1 className="font-heading text-3xl md:text-4xl font-black uppercase text-[#F3EFE7] mb-2">
495|          Search Results
496|        </h1>
497|        <p className="text-[#A0A0A5] mb-10">
498|          {loading ? 'Searching...' : `${results.length} result${results.length !== 1 ? 's' : ''} for "${query}"`}
499|        </p>
500|
501|        {!loading && results.length === 0 && (
502|          <div className="text-center py-20">
503|            <p className="text-[#A0A0A5]">No tours found matching your search.</p>
504|          </div>
505|        )}
506|
507|        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
508|          {results.map(tour => (
509|            <TourCard key={tour.id} tour={tour} />
510|          ))}
511|        </div>
512|      </div>
513|    </div>
514|  );
515|};
516|
517|// ============ TOUR DETAIL PAGE ============
518|const TourDetailPage = () => {
519|  const { tourId } = useParams();
520|  const navigate = useNavigate();
521|  const [tour, setTour] = useState(null);
522|  const [loading, setLoading] = useState(true);
523|  const [checkoutLoading, setCheckoutLoading] = useState(false);
524|  const [customerEmail, setCustomerEmail] = useState('');
525|  const [customerName, setCustomerName] = useState('');
526|
527|  useEffect(() => {
528|    const fetchTour = async () => {
529|      try {
530|        const res = await axios.get(`${API}/tours/${tourId}`);
531|        setTour(res.data);
532|      } catch (e) {
533|        console.error("Error fetching tour:", e);
534|      } finally {
535|        setLoading(false);
536|      }
537|    };
538|    fetchTour();
539|  }, [tourId]);
540|
541|  const handleStripeCheckout = async () => {
542|    setCheckoutLoading(true);
543|    try {
544|      const res = await axios.post(`${API}/checkout/stripe`, {
545|        tour_id: tourId,
546|        origin_url: window.location.origin,
547|        customer_email: customerEmail || null,
548|        customer_name: customerName || null
549|      });
550|      window.location.href = res.data.url;
551|    } catch (e) {
552|      console.error("Checkout error:", e);
553|      alert("Failed to start checkout. Please try again.");
554|    } finally {
555|      setCheckoutLoading(false);
556|    }
557|  };
558|
559|  if (loading) {
560|    return <div className="min-h-screen flex items-center justify-center"><div className="text-[#E5A93D] animate-pulse">Loading...</div></div>;
561|  }
562|
563|  if (!tour) {
564|    return <div className="min-h-screen flex items-center justify-center text-[#F3EFE7]">Tour not found</div>;
565|  }
566|
567|  const IconComponent = tour.category ? iconMap[tour.category.icon] : null;
568|
569|  return (
570|    <div className="pt-20 min-h-screen" data-testid="tour-detail-page">
571|      {/* Hero image */}
572|      <div className="relative h-[50vh] min-h-[400px]">
573|        <img src={tour.image} alt={tour.name} className="w-full h-full object-cover" />
574|        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/30 to-transparent" />
575|        <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
576|          <div className="max-w-7xl mx-auto">
577|            <button onClick={() => navigate(-1)} className="inline-flex items-center gap-2 text-[#A0A0A5] hover:text-[#E5A93D] mb-4 transition-colors" data-testid="back-btn">
578|              <ArrowLeft size={18} />
579|              Back
580|            </button>
581|            {tour.category && (
582|              <Link to={`/category/${tour.category.id}`} className="category-badge mb-4" data-testid="tour-category-badge">
583|                {IconComponent && <IconComponent size={14} />}
584|                {tour.category.name}
585|              </Link>
586|            )}
587|            <h1 className="font-heading text-3xl md:text-5xl font-black uppercase text-[#F3EFE7] mt-3">{tour.name}</h1>
588|          </div>
589|        </div>
590|      </div>
591|
592|      {/* Content */}
593|      <div className="py-12 px-6 lg:px-8">
594|        <div className="max-w-7xl mx-auto">
595|          <div className="grid lg:grid-cols-3 gap-12">
596|            {/* Main content */}
597|            <div className="lg:col-span-2">
598|              <div className="flex items-center gap-6 mb-8">
599|                <div className="duration-badge">
600|                  <Clock size={18} />
601|                  <span className="text-lg">{tour.duration}</span>
602|                </div>
603|                <div className="text-3xl font-heading font-black text-[#E5A93D]">${tour.price.toFixed(2)}</div>
604|              </div>
605|
606|              <p className="text-lg text-[#A0A0A5] leading-relaxed mb-10">{tour.description}</p>
607|
608|              <div className="mb-10">
609|                <h3 className="font-heading text-xl font-bold text-[#F3EFE7] mb-4 uppercase">What to Expect</h3>
610|                <p className="text-[#A0A0A5] leading-relaxed">{tour.what_to_expect}</p>
611|              </div>
612|
613|              <div className="mb-10">
614|                <h3 className="font-heading text-xl font-bold text-[#F3EFE7] mb-4 uppercase">Highlights</h3>
615|                <div className="grid sm:grid-cols-2 gap-3">
616|                  {tour.highlights.map((h, i) => (
617|                    <div key={i} className="highlight-item">
618|                      <Check className="text-[#E5A93D] flex-shrink-0" size={18} />
619|                      <span className="text-[#F3EFE7]">{h}</span>
620|                    </div>
621|                  ))}
622|                </div>
623|              </div>
624|
625|              <div>
626|                <h3 className="font-heading text-xl font-bold text-[#F3EFE7] mb-4 uppercase">Requirements</h3>
627|                <ul className="space-y-3">
628|                  {tour.requirements.map((r, i) => (
629|                    <li key={i} className="flex items-center gap-3 text-[#A0A0A5]">
630|                      <div className="w-1.5 h-1.5 bg-[#E5A93D] rounded-full" />
631|                      {r}
632|                    </li>
633|                  ))}
634|                </ul>
635|              </div>
636|            </div>
637|
638|            {/* Checkout sidebar */}
639|            <div className="lg:col-span-1">
640|              <div className="checkout-section p-6 sticky top-28" data-testid="checkout-section">
641|                <h3 className="font-heading text-xl font-bold text-[#F3EFE7] mb-6 uppercase">Book This Tour</h3>
642|                
643|                <div className="space-y-4 mb-6">
644|                  <div>
645|                    <label className="text-sm text-[#A0A0A5] mb-2 block">Name (optional)</label>
646|                    <input 
647|                      type="text"
648|                      value={customerName}
649|                      onChange={(e) => setCustomerName(e.target.value)}
650|                      placeholder="Your name"
651|                      className="input-elegant w-full"
652|                      data-testid="checkout-name-input"
653|                    />
654|                  </div>
655|                  <div>
656|                    <label className="text-sm text-[#A0A0A5] mb-2 block">Email (optional)</label>
657|                    <input 
658|                      type="email"
659|                      value={customerEmail}
660|                      onChange={(e) => setCustomerEmail(e.target.value)}
661|                      placeholder="your@email.com"
662|                      className="input-elegant w-full"
663|                      data-testid="checkout-email-input"
664|                    />
665|                  </div>
666|                </div>
667|
668|                <div className="flex items-center justify-between mb-6 pb-6 border-b border-[#2A2A2E]">
669|                  <span className="text-[#A0A0A5]">Total</span>
670|                  <span className="font-heading text-2xl font-black text-[#E5A93D]">${tour.price.toFixed(2)}</span>
671|                </div>
672|
673|                <div className="space-y-3">
674|                  <button 
675|                    onClick={handleStripeCheckout}
676|                    disabled={checkoutLoading}
677|                    className="payment-btn payment-btn-stripe flex items-center justify-center gap-3"
678|                    data-testid="stripe-checkout-btn"
679|                  >
680|                    {checkoutLoading ? 'Processing...' : 'Pay with Card'}
681|                  </button>
682|                  
683|                  <div className="relative py-4">
684|                    <div className="absolute inset-0 flex items-center">
685|                      <div className="w-full border-t border-[#2A2A2E]" />
686|                    </div>
687|                    <div className="relative flex justify-center">
688|                      <span className="bg-[#101014] px-4 text-sm text-[#A0A0A5]">or</span>
689|                    </div>
690|                  </div>
691|
692|                  <button 
693|                    className="payment-btn payment-btn-paypal flex items-center justify-center gap-3"
694|                    data-testid="paypal-checkout-btn"
695|                    onClick={() => alert('PayPal checkout requires PayPal SDK integration with valid Client ID')}
696|                  >
697|                    Pay with PayPal
698|                  </button>
699|                </div>
700|
701|                <p className="text-xs text-[#A0A0A5] mt-6 text-center">
702|                  Secure payment powered by Stripe
703|                </p>
704|              </div>
705|            </div>
706|          </div>
707|        </div>
708|      </div>
709|    </div>
710|  );
711|};
712|
713|// ============ PAYMENT SUCCESS PAGE ============
714|const PaymentSuccessPage = () => {
715|  const [searchParams] = useSearchParams();
716|  const sessionId = searchParams.get('session_id');
717|  const [status, setStatus] = useState('checking');
718|  const [transaction, setTransaction] = useState(null);
719|  const [pollCount, setPollCount] = useState(0);
720|
721|  useEffect(() => {
722|    if (!sessionId) {
723|      setStatus('error');
724|      return;
725|    }
726|
727|    const checkStatus = async () => {
728|      try {
729|        const res = await axios.get(`${API}/checkout/status/${sessionId}`);
730|        if (res.data.payment_status === 'paid') {
731|          setStatus('success');
732|          setTransaction(res.data.transaction);
733|        } else if (res.data.status === 'expired') {
734|          setStatus('expired');
735|        } else if (pollCount < 5) {
736|          setPollCount(prev => prev + 1);
737|          setTimeout(checkStatus, 2000);
738|        } else {
739|          setStatus('pending');
740|        }
741|      } catch (e) {
742|        console.error("Status check error:", e);
743|        setStatus('error');
744|      }
745|    };
746|
747|    checkStatus();
748|  }, [sessionId, pollCount]);
749|
750|  return (
751|    <div className="pt-32 pb-16 px-6 lg:px-8 min-h-screen" data-testid="payment-success-page">
752|      <div className="max-w-xl mx-auto text-center">
753|        {status === 'checking' && (
754|          <div className="animate-pulse">
755|            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#222226] flex items-center justify-center">
756|              <Clock className="text-[#E5A93D]" size={40} />
757|            </div>
758|            <h1 className="font-heading text-3xl font-black text-[#F3EFE7] mb-4">Confirming Payment...</h1>
759|            <p className="text-[#A0A0A5]">Please wait while we verify your payment.</p>
760|          </div>
761|        )}
762|
763|        {status === 'success' && (
764|          <>
765|            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#E5A93D]/20 flex items-center justify-center success-icon">
766|              <Check className="text-[#E5A93D]" size={40} />
767|            </div>
768|            <h1 className="font-heading text-3xl font-black text-[#F3EFE7] mb-4" data-testid="success-title">Payment Successful!</h1>
769|            <p className="text-[#A0A0A5] mb-8">Thank you for your purchase. You will receive a confirmation email with next steps.</p>
770|            
771|            {transaction && (
772|              <div className="checkout-section p-6 text-left mb-8" data-testid="transaction-details">
773|                <h3 className="font-heading text-lg font-bold text-[#F3EFE7] mb-4">Order Details</h3>
774|                <div className="space-y-3 text-sm">
775|                  <div className="flex justify-between">
776|                    <span className="text-[#A0A0A5]">Tour</span>
777|                    <span className="text-[#F3EFE7]">{transaction.tour_name}</span>
778|                  </div>
779|                  <div className="flex justify-between">
780|                    <span className="text-[#A0A0A5]">Amount</span>
781|                    <span className="text-[#E5A93D] font-bold">${transaction.amount.toFixed(2)}</span>
782|                  </div>
783|                  <div className="flex justify-between">
784|                    <span className="text-[#A0A0A5]">Status</span>
785|                    <span className="text-green-400">Paid</span>
786|                  </div>
787|                </div>
788|              </div>
789|            )}
790|            
791|            <Link to="/" className="btn-primary inline-block" data-testid="back-home-btn">
792|              Back to Home
793|            </Link>
794|          </>
795|        )}
796|
797|        {status === 'expired' && (
798|          <>
799|            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-red-500/20 flex items-center justify-center">
800|              <X className="text-red-500" size={40} />
801|            </div>
802|            <h1 className="font-heading text-3xl font-black text-[#F3EFE7] mb-4">Session Expired</h1>
803|            <p className="text-[#A0A0A5] mb-8">Your payment session has expired. Please try again.</p>
804|            <Link to="/" className="btn-primary inline-block">Back to Home</Link>
805|          </>
806|        )}
807|
808|        {status === 'error' && (
809|          <>
810|            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-red-500/20 flex items-center justify-center">
811|              <X className="text-red-500" size={40} />
812|            </div>
813|            <h1 className="font-heading text-3xl font-black text-[#F3EFE7] mb-4">Something Went Wrong</h1>
814|            <p className="text-[#A0A0A5] mb-8">We couldn't verify your payment. Please contact support.</p>
815|            <Link to="/" className="btn-primary inline-block">Back to Home</Link>
816|          </>
817|        )}
818|
819|        {status === 'pending' && (
820|          <>
821|            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#E5A93D]/20 flex items-center justify-center">
822|              <Clock className="text-[#E5A93D]" size={40} />
823|            </div>
824|            <h1 className="font-heading text-3xl font-black text-[#F3EFE7] mb-4">Payment Processing</h1>
825|            <p className="text-[#A0A0A5] mb-8">Your payment is still being processed. Please check your email for confirmation.</p>
826|            <Link to="/" className="btn-primary inline-block">Back to Home</Link>
827|          </>
828|        )}
829|      </div>
830|    </div>
831|  );
832|};
833|
834|// ============ MAIN APP ============
835|function App() {
836|  return (
837|    <div className="App bg-[#050505] min-h-screen">
838|      <BrowserRouter>
839|        <Navbar />
840|        <Routes>
841|          <Route path="/" element={<HomePage />} />
842|          <Route path="/category/:categoryId" element={<CategoryPage />} />
843|          <Route path="/tour/:tourId" element={<TourDetailPage />} />
844|          <Route path="/search" element={<SearchPage />} />
845|          <Route path="/payment/success" element={<PaymentSuccessPage />} />
846|        </Routes>
847|        <Footer />
848|      </BrowserRouter>
849|      <div className="grain-overlay" />
850|    </div>
851|  );
852|}
853|
854|export default App;
855|
[End of file]
