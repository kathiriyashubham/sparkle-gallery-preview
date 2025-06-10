
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Images } from 'lucide-react';

interface GalleryModalProps {
  product: {
    id: string;
    name: string;
    category: string;
    price?: string;
    images: string[];
    videos: string[];
  };
  isOpen: boolean;
  onClose: () => void;
}

const GalleryModal = ({ product, isOpen, onClose }: GalleryModalProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const allMedia = [...product.images, ...product.videos];

  const isVideo = (url: string) => {
    return url.includes('.mp4') || url.includes('.mov') || url.includes('.webm');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-hidden p-0">
        <DialogHeader className="p-6 pb-4 border-b border-slate-200">
          <div className="flex items-center justify-between">
            <div>
              <DialogTitle className="text-2xl font-bold text-slate-900 mb-2">
                {product.name}
              </DialogTitle>
              <div className="flex items-center gap-3">
                <Badge className="bg-amber-500 text-white">
                  {product.category}
                </Badge>
                {product.price && (
                  <span className="text-lg font-bold text-amber-600">
                    {product.price}
                  </span>
                )}
              </div>
            </div>
            <div className="text-sm text-slate-500">
              {selectedIndex + 1} / {allMedia.length}
            </div>
          </div>
        </DialogHeader>

        <div className="flex flex-col lg:flex-row h-full max-h-[calc(90vh-120px)]">
          {/* Main Media Display */}
          <div className="flex-1 bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
            {allMedia.length > 0 ? (
              isVideo(allMedia[selectedIndex]) ? (
                <video
                  src={allMedia[selectedIndex]}
                  controls
                  className="max-w-full max-h-full rounded-lg shadow-lg"
                />
              ) : (
                <img
                  src={allMedia[selectedIndex]}
                  alt={`${product.name} ${selectedIndex + 1}`}
                  className="max-w-full max-h-full object-contain rounded-lg shadow-lg"
                />
              )
            ) : (
              <div className="flex flex-col items-center justify-center text-slate-400">
                <Images className="w-16 h-16 mb-4" />
                <p>No media available</p>
              </div>
            )}
          </div>

          {/* Thumbnail Grid */}
          <div className="w-full lg:w-80 border-l-0 lg:border-l border-slate-200 bg-white">
            <div className="p-4">
              <h3 className="font-semibold text-slate-900 mb-4 flex items-center">
                <Images className="w-4 h-4 mr-2" />
                All Media ({allMedia.length})
              </h3>
              
              <div className="grid grid-cols-4 lg:grid-cols-2 gap-3 max-h-96 overflow-y-auto">
                {allMedia.map((media, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedIndex(index)}
                    className={`aspect-square rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                      selectedIndex === index
                        ? 'border-amber-500 ring-2 ring-amber-200'
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    {isVideo(media) ? (
                      <video
                        src={media}
                        className="w-full h-full object-cover"
                        muted
                      />
                    ) : (
                      <img
                        src={media}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </button>
                ))}
              </div>

              {/* Navigation Buttons */}
              <div className="flex gap-2 mt-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSelectedIndex(Math.max(0, selectedIndex - 1))}
                  disabled={selectedIndex === 0}
                  className="flex-1"
                >
                  Previous
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSelectedIndex(Math.min(allMedia.length - 1, selectedIndex + 1))}
                  disabled={selectedIndex === allMedia.length - 1}
                  className="flex-1"
                >
                  Next
                  <ArrowRight className="w-3 h-3 ml-1" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default GalleryModal;
