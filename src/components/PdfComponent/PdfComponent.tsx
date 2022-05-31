import React from 'react'
import PDFViewer from 'pdf-viewer-reactjs'
import { FileComponent } from './style'

export const PdfComponent = () => {
  return (
    <FileComponent>
      <PDFViewer
        document={{
          url: 'https://arxiv.org/pdf/quant-ph/0410100.pdf',
        }}
      />
    </FileComponent>
  )
}
