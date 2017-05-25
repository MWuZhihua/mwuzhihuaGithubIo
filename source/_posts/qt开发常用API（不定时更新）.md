---
title: qt开发常用API（不定时更新）
date: 2017-05-25 10:03:58
tags: 小技巧
categories: qt
---
### 说明
qt版本为5.5.1
### Qlabel
```
Qlabel *label = new  Qlabel();
//设置字体颜色
label->setStyleSheet("color:blue");
//在label上停鼠标变为手状
label->setCursor(QCursor(Qt::PointingHandCursor));
//设置自动换行
label->setWordWrap(true);
//居中显示
label->setAlignment(Qt::AlignVCenter);
```
### QTableView  QStandardItemModel
```
QStandardItemModel *pModel = QStandardItemModel(); 
QTableView *pView = QTableView(); 
// 设置行列 高
pModel->setRowCount(rowCount);
pModel->setColumnCount(6);
pView->setRowHeight(0 , 20);
//设置表头
pModel->setHeaderData(0,Qt::Horizontal,QStringLiteral("测试"));
//设置单行选中
ui->tableView_selectedQues->setSelectionMode(QAbstractItemView::SingleSelection);
//设置表选中为整行选中
pView->setSelectionBehavior(QAbstractItemView::SelectRows);
//设置表的单元为只读属性
pView->setEditTriggers(QAbstractItemView::NoEditTriggers);
//隐藏表头
pView->verticalHeader()->hide();
//表头信息显示居中
pView->horizontalHeader()->setDefaultAlignment(Qt::AlignCenter);
//禁止表头高亮
pView->horizontalHeader()->setHighlightSections(false);
//设置数据
pModel->setData(pSelectedQuesModelM->index(0, 0 , QModelIndex()),  1);
//设置对齐方式
pModel->item(i,0)->setTextAlignment(Qt::AlignVCenter|Qt::AlignHCenter);
```
### QAxObject
```
//对excel的操作
QAxObject *excel = NULL;
QAxObject *workbooks = NULL;
QAxObject *workbook = NULL;
excel = new QAxObject("Excel.Application");
excel->dynamicCall("SetVisible(bool)",false);
workbooks = excel->querySubObject("WorkBooks");
workbook = workbooks->querySubObject("Open(const QString&)",filePath);

//取第一张表
QAxObject *worksheet = workbook->querySubObject("WorkSheets(int)",1);
//取表中的行列数
QAxObject *usedRange = pObejct->querySubObject("UsedRange");
QAxObject *rows = usedRange->querySubObject("Rows");
QAxObject *cols = usedRange->querySubObject("Columns");
int rowStart = usedRange->property("Row").toInt();
int colStart = usedRange->property("Column").toInt();
int rowCnt = rows->property("Count").toInt();
int colCnt = cols->property("Count").toInt();
//取表中的数据
QAxObject  *cell;
for(int j=colStart; j<colStart+colCnt; j++)
{
    cell = pObejct->querySubObject("Cells(int,int)",rowStart,j);
    QVariant cellVal = cell->property("Value");
    QString str = cellVal.toString()；
}
//插入数据
for(int j=colStart; j<colStart+colCnt; j++)
{
    cell = pObejct->querySubObject("Cells(int,int)",rowStart,j);
    cell->dynamicCall("setValue2(QString)","teststr");
}
//保存excel
workbook->dynamicCall("SaveAs(QString)",path);
//关闭excel
workbooks->dynamicCall("Close()");
excel->dynamicCall("Quit()");
delete excel;
excel = NULL;
```
### 数据库
```
//初始化数据库
QSqlDatabase db = QSqlDatabase::addDatabase("QODBC3");
db.setDatabaseName("DRIVER={Microsoft Access Driver (*.mdb)};FIL={MS Access};DBQ="+ dataBasePath +";UID=;PWD=");
//打开数据库
if (!db.open())
{
  QString str = db.lastError().text();
  QMessageBox::warning(nullptr , "" ,  QStringLiteral("数据库打开失败"));
  return false;
}
else
{
  //查询数据库   
  QSqlQuery q("SELECT * FROM Question");
  QSqlRecord rec = q.record();
  while (q.next())
  {
     int id = q.value(0).toInt();
     QString quesStr = q.value(1).toString();
  }
}
```