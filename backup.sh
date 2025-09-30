#!/bin/bash
DATE=$(date +%F_%H-%M)
pg_dump -U flash_user flashbring > backup-$DATE.sql
gpg -c backup-$DATE.sql
rm backup-$DATE.sql
echo "✅ Backup chiffré : backup-$DATE.sql.gpg"
