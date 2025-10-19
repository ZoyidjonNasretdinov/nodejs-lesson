const fs = require('fs')
const path = require('path')

// notes papkasini yaratamiz (agar mavjud bo'lmasa)
fs.mkdir(path.join(__dirname, 'notes'), { recursive: true }, (err) => {
  if (err) {
    console.error("❌ Papka yaratishda xatolik:", err.message)
    return
  }

  // endi fayl yaratamiz
  fs.writeFile(
    path.join(__dirname, 'notes', 'octabr.txt'),
    'Create new course nodejs',
    (err) => {
      if (err) {
        console.error("❌ Fayl yozishda xatolik:", err.message)
        return
      }

      console.log("✅ File was created successfully!")
    }
  )
})
