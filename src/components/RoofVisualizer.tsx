import React, { useState, useRef } from 'react';
import { Upload, Loader2, RefreshCw, Wand2 } from 'lucide-react';
import { generateRoofVisualization } from '../services/geminiService';

const RoofVisualizer: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        const rawBase64 = base64String.split(',')[1];

        setSelectedImage(base64String);
        setGeneratedImage(null);
        setError(null);

        // Auto-trigger generation
        generateVisualization(rawBase64);
      };
      reader.readAsDataURL(file);
    }
  };

  const generateVisualization = async (rawBase64: string) => {
    setLoading(true);
    setError(null);
    try {
      const result = await generateRoofVisualization(rawBase64);
      if (result) {
        setGeneratedImage(result);
      } else {
        setError("Could not generate a visualization. Please try a clearer image.");
      }
    } catch (err) {
      setError("An error occurred. Please check your API configuration.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-32 bg-midnight relative border-t border-white/5">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <div className="mb-16">
          <span className="text-gold font-sans tracking-[0.3em] text-xs uppercase block mb-3 animate-pulse">
            AI Architect
          </span>
          <h2 className="font-display text-4xl md:text-6xl text-white mb-6">
            See Your Roof in Solar.
          </h2>
          <p className="text-gray-400 font-sans max-w-xl mx-auto font-light leading-relaxed">
            Upload your property. Watch as we overlay our premium sleek-black arrays in real-time.
          </p>
        </div>

        <div className="relative min-h-[500px] bg-[#1a1a1a] border border-white/5 rounded-sm overflow-hidden flex flex-col items-center justify-center transition-all duration-700 hover:border-white/10">

          {/* Background Grid Effect */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

          {!selectedImage && (
            <div
              className="relative z-10 p-12 w-full h-full flex flex-col items-center justify-center cursor-pointer group"
              onClick={() => fileInputRef.current?.click()}
            >
              <div className="w-20 h-20 rounded-full bg-midnight border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-gold transition-all duration-500 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                <Upload className="w-8 h-8 text-gray-400 group-hover:text-gold transition-colors duration-300" />
              </div>
              <h3 className="text-white font-display text-xl mb-2">Upload Property Photo</h3>
              <p className="text-gray-500 font-sans text-sm tracking-wide">JPG or PNG • Max 10MB</p>
            </div>
          )}

          {selectedImage && (
            <div className="relative w-full h-full grid grid-cols-1 md:grid-cols-2 h-[600px]">
              {/* Original Image */}
              <div className="relative h-[300px] md:h-full border-b md:border-b-0 md:border-r border-white/10 group">
                <div className="absolute top-4 left-4 z-20 bg-black/60 backdrop-blur-md text-white/80 text-[10px] uppercase tracking-widest px-3 py-1 rounded-sm border border-white/10">Original</div>
                <img src={selectedImage} alt="Original" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700" />
              </div>

              {/* AI Result */}
              <div className="relative h-[300px] md:h-full bg-black/40 flex items-center justify-center overflow-hidden">
                <div className="absolute top-4 left-4 z-20 bg-gold/10 backdrop-blur-md text-gold text-[10px] uppercase tracking-widest px-3 py-1 rounded-sm border border-gold/20 flex items-center gap-2">
                  <Wand2 className="w-3 h-3" /> Projection
                </div>

                {loading && (
                  <div className="flex flex-col items-center gap-6 z-10">
                    <div className="relative">
                      <div className="w-16 h-16 border-t-2 border-gold rounded-full animate-spin"></div>
                      <div className="absolute inset-0 w-16 h-16 border-r-2 border-cyan/30 rounded-full animate-spin duration-1000 reverse"></div>
                    </div>
                    <span className="text-gold font-sans text-xs tracking-[0.2em] uppercase animate-pulse">Architecting...</span>
                  </div>
                )}

                {!loading && generatedImage && (
                  <div className="relative w-full h-full animate-in fade-in zoom-in duration-1000 ease-out">
                    <img src={generatedImage} alt="Generated" className="w-full h-full object-cover" />
                    {/* Glow Overlay */}
                    <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_100px_rgba(212,175,55,0.1)]"></div>
                    <div className="absolute inset-0 bg-gold/5 mix-blend-overlay"></div>
                  </div>
                )}

                {!loading && !generatedImage && error && (
                  <div className="text-red-400 text-sm px-8 text-center font-sans">{error}</div>
                )}

                <div className="absolute bottom-6 right-6 z-20">
                  <button
                    onClick={(e) => { e.stopPropagation(); fileInputRef.current?.click(); }}
                    className="p-3 bg-midnight/80 backdrop-blur border border-white/20 text-white hover:border-gold hover:text-gold transition-all rounded-full"
                    title="Try Another"
                  >
                    <RefreshCw className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          )}

          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept="image/*"
            className="hidden"
          />
        </div>

        <p className="mt-8 text-[10px] text-gray-600 font-sans tracking-widest uppercase opacity-60">
          Powered by Gemini AI Vision
        </p>
      </div>
    </div>
  );
};

export default RoofVisualizer;