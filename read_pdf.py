from pypdf import PdfReader
reader = PdfReader("/root/portfolio/src/assets/roshan-razak.pdf")
text = ""
for page in reader.pages:
    text += page.extract_text()
print(text)
