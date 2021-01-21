export default function checkFileFormat(file: File): boolean {
  let valid = true
  if (file) {
    if (
      !['application/pdf', 'application/doc', 'application/docx'].includes(
        file.type
      )
    ) {
      valid = false
    }
  }
  return valid
}
