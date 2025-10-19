const fs = require('fs')
const path = require('path')

// notes papkasini yaratamiz (agar mavjud bo‘lmasa)
fs.mkdir(path.join(__dirname, 'notes'), { recursive: true }, (err) => {
  if (err) {
    console.error("❌ Papka yaratishda xatolik:", err.message)
    return
  }

  const filePath = path.join(__dirname, 'notes', 'octabr.txt')

  // Fayl yaratamiz
  fs.writeFile(filePath, 'Create new course nodejs\n', (err) => {
    if (err) {
      console.error("❌ Fayl yozishda xatolik:", err.message)
      return
    }

    console.log("✅ File was created successfully!")

    // Endi shu faylga yangi ma'lumot qo‘shamiz (append)
    fs.appendFile(filePath, 'and append new file\n', (err) => {
      if (err) {
        console.error("❌ Faylga qo‘shimcha yozishda xatolik:", err.message)
        return
      }

      console.log("📝 Text successfully appended to file!")
    })
  })
})
