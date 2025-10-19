const fs = require('fs')
const path = require('path')

const filePath = path.join(__dirname, 'notes', 'octabr.txt')

// notes papkasini yaratamiz (agar mavjud bo‘lmasa)
fs.mkdir(path.join(__dirname, 'notes'), { recursive: true }, (err) => {
  if (err) {
    console.error("❌ Papka yaratishda xatolik:", err.message)
    return
  }

  // Fayl yaratamiz
  fs.writeFile(filePath, 'Create new course nodejs\n', (err) => {
    if (err) {
      console.error("❌ Fayl yozishda xatolik:", err.message)
      return
    }

    console.log("✅ File was created successfully!")

    // Faylga yangi ma'lumot qo‘shamiz
    fs.appendFile(filePath, 'and append new file', (err) => {
      if (err) {
        console.error("❌ Faylga qo‘shimcha yozishda xatolik:", err.message)
        return
      }

      console.log("📝 Text successfully appended to file!")

      // Endi faylni o‘qiymiz
      fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
          console.error("❌ Faylni o‘qishda xatolik:", err.message)
          return
        }

        console.log("📄 Fayl mazmuni:")
        console.log(data)
      })
    })
  })
})
