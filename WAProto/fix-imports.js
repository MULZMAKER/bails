import { readFileSync, writeFileSync } from 'fs'
import { join } from 'path'

const file = join(process.cwd(), 'WAProto/index.js')
let content = readFileSync(file, 'utf-8')

content = content.replace('import * as $protobuf from "protobufjs/minimal";', 'import $protobuf from "protobufjs/minimal.js";')
content = content.replace('import * as $protobuf from "protobufjs/minimal.js";', 'import $protobuf from "protobufjs/minimal.js";')

writeFileSync(file, content)
console.log('fixed WAProto imports')
