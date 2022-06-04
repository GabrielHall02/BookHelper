import React from "react"
import "./style.css"
import { saveAs } from "file-saver";

export default function ExportBtn() {
    return (

      <div className="export-btn" onClick={() => {saveAs("https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
      "example.pdf")}}>
        <p className="txt-439 flex-hcenter">Exportar Template</p>
      </div>

    )
  }