import * as ReactDOM from "react-dom";
import * as React from "react";
// import "./index.css";
import {
  PdfViewerComponent,
  Toolbar,
  Magnification,
  Navigation,
  LinkAnnotation,
  BookmarkView,
  ThumbnailView,
  Print,
  TextSelection,
  Annotation,
  TextSearch,
  FormFields,
  FormDesigner,
  Inject,
} from "@syncfusion/ej2-react-pdfviewer";

export const PdfThumbnail = ({ pdfUrl }) => {
  return (
    <div>
      {/* <div className="control-section">
        <PdfViewerComponent
          id="container"
          documentPath={pdfUrl}
          resourceUrl="https://cdn.syncfusion.com/ej2/23.1.40/dist/ej2-pdfviewer-lib"
          style={{ height: "340px" }}
        >
          <Inject
            services={[
              ThumbnailView,
              TextSelection,
            ]}
          />
        </PdfViewerComponent>
      </div> */}
    </div>
  );
};

// import React, { useState } from 'react';
// import { Worker } from '@react-pdf-viewer/core';
// import '@react-pdf-viewer/core/lib/styles/index.css';

// export const PdfThumbnail = ({ pdfUrl }) => {
//   const [isPdfOpen, setIsPdfOpen] = useState(false);
//   const [thumbnailUrl, setThumbnailUrl] = useState(null);

//   const openPdfViewer = () => {
//     setIsPdfOpen(true);
//   };

//   const loadThumbnail = async () => {
//     const pdfDoc = await pdfjs.getDocument({ url: pdfUrl }).promise;
//     const page = await pdfDoc.getPage(1); // Charger la première page comme miniature
//     const viewport = page.getViewport({ scale: 0.2 }); // Ajuster l'échelle selon les besoins
//     const canvas = document.createElement('canvas');
//     const context = canvas.getContext('2d');
//     canvas.width = viewport.width;
//     canvas.height = viewport.height;

//     await page.render({ canvasContext: context, viewport }).promise;
//     const thumbnailDataUrl = canvas.toDataURL('image/png');
//     setThumbnailUrl(thumbnailDataUrl);
//   };

//   return (
//     <div style={{ width: '150px', height: '150px' }}>
//       {isPdfOpen ? (
//         <div>
//           <button onClick={() => setIsPdfOpen(false)}>Fermer la visionneuse</button>
//           <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
//             <Viewer fileUrl={pdfUrl} />
//           </Worker>
//         </div>
//       ) : (
//         <div onClick={() => { openPdfViewer(); loadThumbnail(); }} style={{ cursor: 'pointer' }}>
//           {thumbnailUrl ? (
//             <img src={thumbnailUrl} alt="PDF Thumbnail" style={{ width: '100%', height: '100%' }} />
//           ) : (
//             <p>Loading Thumbnail...</p>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };
